import { create } from 'zustand';
import { log } from '../zustandLog';
import type { ChatObject, ExpenseSet, IncomeSet, Mission, SupportMemberType } from './missionTypes';
import {
  getMissionFromSupa,
  getMissionsFromSupa,
  postArchiveMissionToSupa,
  postMissionToSupa,
  putMissionToSupa,
  putSecurityCodeToSupa,
} from './missionActions';
import { getMissionEventFromSupa, getProfileFromSupa } from '../auth/authActions';
import { AuthData } from '../auth/authTypes';
import { generateCode } from '../utils/generateCode';
import { getVariableRankImageDetails } from '../utils/getRankImageDetails';
import { UUID } from 'crypto';

export type ExtendedMission = Mission & {
  [key: string | number]: any;
  mission: Mission;
  attachedEvent: any;
  missionCreator: AuthData;
  missionsFilter: string;
  allMissions: Mission[] | null;
  activeTab: string;
  missionCreatorDetails: any;
  setMissionFilter: (filter: string) => void;
  setMission: (id: number) => void;
  addMission: (mission: Mission) => void;
  getAllMissions: () => void;
  setActiveTab: (tab: string) => void;
  getMemberProfile: (id: any) => AuthData;
  getAttachedEvents: (id: any) => any;
  resetSecurityCode: (id: any) => any;
  archiveMission: (id: any) => any;
  addChatMessage: (newChat: ChatObject) => any;
  archiveChatMessage: (chatId: string) => any;
  removeGroup: (groupId: string) => any;
  addMemberToGroup: (groupId: string, memberId: SupportMemberType) => any;
  removeMemberFromGroup: (groupId: string, memberId: UUID) => any;
  addShare: (groupId: string, memberId: string) => any;
  removeShare: (groupId: string, memberId: string) => any;
  togglePaid: (groupId: string, memberId: string) => any;
  addTimeCard: (groupId: string, memberId: string) => any;
  removeTimeCard: (groupId: string, memberId: string, timeCardId: string | number) => any;
  clockoutTimeCard: (groupId: string, memberId: string, timeCardId: string | number) => any;
  removeIncome: (incomeId: string) => any;
  addIncome: (income: IncomeSet) => any;
  removeExpense: (expenseId: string) => any;
  addExpense: (expense: ExpenseSet) => any;
};

export const useMissionStore = create<ExtendedMission>(
  log((set: any, get: any) => ({
    mission: {} as ExtendedMission,
    missionsFilter: '',
    allMissions: null,
    activeTab: 'mission-info',
    setMissionFilter: async (filter: string) => {
      if (filter === '') {
        get().getAllMissions();
      }
      set((state: any) => ({
        missionsFilter: filter,
        allMissions: state?.allMissions?.filter((mission: Mission) => {
          return mission?.mission_name?.toLowerCase()?.includes(filter?.toLowerCase());
        }),
      }));
    },
    setMission: async (id: number) => {
      const data: any | null = await getMissionFromSupa({ id });
      data?.groups?.map((group: any) => {
        group?.support_members?.map((id: any) => {
          return get().getMemberProfile(id);
        });
      });
      if (data?.[0]?.creator !== undefined && data?.[0]?.creator !== null) {
        const creatorDetails = await get().getMemberProfile(data?.[0]?.creator);
        const creatorRankDetails = getVariableRankImageDetails(creatorDetails?.[0]?.network_rank?.grade);
        set((state: any) => ({
          missionCreatorDetails: creatorRankDetails,
          missionCreator: creatorDetails?.[0],
        }));
      }
      if (data?.[0]?.event_id !== null && data?.[0]?.event_id !== undefined) {
        const eventDetails = await get().getAttachedEvents(data?.[0]?.event_id);
        set((state: any) => ({
          attachedEvent: eventDetails?.[0],
        }));
      }
      set((state: any) => ({
        mission: data[0],
      }));
    },
    addMission: async (mission: Mission) => {
      await postMissionToSupa(mission);
      await get().getAllMissions();
    },
    updateMission: async (mission: Mission) => {
      await putMissionToSupa(mission);
      await get().setMission(mission.id);
    },
    getAllMissions: async () => {
      const data: any | null = await getMissionsFromSupa();
      set((state: any) => ({
        allMissions: data,
      }));
    },
    setActiveTab: async (tab: string) => {
      set((state: any) => ({
        activeTab: tab,
      }));
    },
    getMemberProfile: async (id: string) => {
      return getProfileFromSupa({
        activeId: id,
      });
    },
    getAttachedEvents: async (id: string) => {
      return getMissionEventFromSupa({
        activeId: id,
      });
    },
    resetSecurityCode: async (id: string) => {
      const newCode = generateCode(2, 8);
      await putSecurityCodeToSupa({
        id,
        code: newCode,
      });
      get().setMission(id);
    },
    archiveMission: async (id: string) => {
      await postArchiveMissionToSupa({
        id,
        is_archived: get().mission?.is_archived ? false : true,
      });
      get().setMission(id);
    },
    addChatMessage: async (newChat: ChatObject) => {
      const mission = get().mission;
      let chatUpdate: ChatObject[] = [];
      if (mission?.chats) {
        chatUpdate = [...mission.chats, newChat];
      } else {
        chatUpdate = [newChat];
      }
      mission.chats = chatUpdate.sort((a: ChatObject, b: ChatObject) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    archiveChatMessage: async (chatId: string) => {
      const mission = get().mission;
      const chatUpdate = mission?.chats?.map((chat: ChatObject) => {
        if (chat.id === chatId) {
          chat.hidden = chat.hidden ? false : true;
        }
        return chat;
      });
      mission.chats = chatUpdate;
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    removeGroup: async (groupId: string) => {
      const mission = get().mission;
      const groupUpdate = mission?.groups?.filter((group: any) => group.support_id !== groupId);
      mission.groups = groupUpdate;
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    addMemberToGroup: async (groupId: string, member: SupportMemberType) => {
      const mission = get().mission;
      const groupUpdate = mission?.groups?.map((group: any) => {
        if (group.support_id === groupId) {
          group.support_members = [...group.support_members, member];
        }
        return group;
      });
      mission.groups = groupUpdate;
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    removeMemberFromGroup: async (groupId: string, memberId: UUID) => {
      const mission = get().mission;
      const groupUpdate = mission?.groups?.map((group: any) => {
        if (group.support_id === groupId) {
          group.support_members = group.support_members.filter((member: any) => member.member !== memberId);
        }
        return group;
      });
      mission.groups = groupUpdate;
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    addShare: async (groupId: string, memberId: string) => {
      const mission = get().mission;
      mission.groups?.map((group: any) => {
        if (group?.support_id === groupId) {
          group?.support_members?.map((memberMap: any) => {
            if (memberMap.member === memberId) {
              if (!memberMap.accumulatedMins) {
                memberMap.accumulatedMins = 0;
              }
              memberMap.accumulatedMins += 15;
            }
          });
        }
      });
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    removeShare: async (groupId: string, memberId: string) => {
      const mission = get().mission;
      mission.groups?.map((group: any) => {
        if (group?.support_id === groupId) {
          group?.support_members?.map((memberMap: any) => {
            if (memberMap.member === memberId) {
              if (!memberMap.accumulatedMins) {
                memberMap.accumulatedMins = 0;
              }
              memberMap.accumulatedMins -= 15;
            }
          });
        }
      });
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    togglePaid: async (groupId: string, memberId: string) => {
      const mission = get().mission;
      mission.groups?.map((group: any) => {
        if (group?.support_id === groupId) {
          group?.support_members?.map((memberMap: any) => {
            if (memberMap.member === memberId) {
              memberMap.hasBeenPaid = memberMap.hasBeenPaid ? false : true;
            }
          });
        }
      });
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    addTimeCard: async (groupId: string, memberId: string) => {
      const mission = get().mission;
      mission.groups?.map((group: any) => {
        if (group?.support_id === groupId) {
          group?.support_members?.map((memberMap: any) => {
            if (memberMap.member === memberId) {
              memberMap?.timeclock?.push({
                id: generateCode(2, 8),
                clock_in: new Date(),
                clock_out: null,
                total: 0,
              });
            }
          });
        }
      });
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    removeTimeCard: async (groupId: string, memberId: string, timeCardId: string | number) => {
      const mission = get().mission;
      mission.groups?.map((group: any) => {
        if (group?.support_id === groupId) {
          group?.support_members?.map((memberMap: any) => {
            if (memberMap.member === memberId) {
              memberMap.timeclock = memberMap?.timeclock?.filter((timeCard: any) => timeCard.id !== timeCardId);
              console.log(memberMap?.timeclock);
            }
          });
        }
      });
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    clockoutTimeCard: async (groupId: string, memberId: string, timeCardId: string | number) => {
      const mission = get().mission;
      mission.groups?.map((group: any) => {
        if (group?.support_id === groupId) {
          group?.support_members?.map((memberMap: any) => {
            if (memberMap.member === memberId) {
              memberMap?.timeclock?.map((timeCard: any) => {
                if (timeCard.id === timeCardId) {
                  timeCard.clock_out = new Date();
                  timeCard.total = Math.abs(timeCard.clock_out - timeCard.clock_in);
                }
              });
            }
          });
        }
      });
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    addIncome: async (income: IncomeSet) => {
      const mission = get().mission;
      mission.income_sets = [...mission.income_sets, income];
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    removeIncome: async (incomeId: string) => {
      const mission = get().mission;
      mission.income_sets = mission.income_sets.filter((income: IncomeSet) => income.id !== incomeId);
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    addExpense: async (expense: ExpenseSet) => {
      const mission = get().mission;
      mission.expense_sets = [...mission.expense_sets, expense];
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
    removeExpense: async (expenseId: string) => {
      const mission = get().mission;
      mission.expense_sets = mission.expense_sets.filter((expense: ExpenseSet) => expense.id !== expenseId);
      await putMissionToSupa(mission);
      get().setMission(mission.id);
    },
  })),
);
