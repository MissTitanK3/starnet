import { create } from 'zustand';
import { log } from '../zustandLog';
import type { ChatObject, Mission, SupportMemberType } from './missionTypes';
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
  })),
);
