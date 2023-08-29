import { create } from 'zustand';
import { log } from '../zustandLog';
import type { Mission } from './missionTypes';
import {
  getMissionFromSupa,
  getMissionsFromSupa,
  postArchiveMissionToSupa,
  postMissionToSupa,
  putSecurityCodeToSupa,
} from './missionActions';
import { getMissionEventFromSupa, getProfileFromSupa } from '../auth/authActions';
import { AuthData } from '../auth/authTypes';
import { generateCode } from '../utils/generateCode';

export type ExtendedMission = Mission & {
  [key: string | number]: any;
  mission: Mission;
  missionsFilter: string;
  allMissions: Mission[] | null;
  activeTab: string;
  setMissionFilter: (filter: string) => void;
  setMission: (id: number) => void;
  addMission: (mission: Mission) => void;
  getAllMissions: () => void;
  setActiveTab: (tab: string) => void;
  getCreatorProfile: (id: any) => AuthData;
  getAttachedEvents: (id: any) => any;
  resetSecurityCode: (id: any) => any;
  archiveMission: (id: any) => any;
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
      set((state: any) => ({
        mission: data[0],
      }));
    },
    addMission: async (mission: Mission) => {
      await postMissionToSupa(mission);
      await get().getAllMissions();
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
    getCreatorProfile: async (id: string) => {
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
  })),
);
