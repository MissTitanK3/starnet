import { create } from 'zustand';
import { log } from '../zustandLog';
import type { Mission } from './missionTypes';
import { getMissionsFromSupa, postMissionToSupa } from './missionActions';

export type ExtendedMission = Mission & {
  [key: string | number]: any;
  mission: Mission;
  missionsFilter: string;
  allMissions: Mission[] | null;
  setMissionFilter: (filter: string) => void;
  setMission: (id: string) => void;
  addMission: (mission: Mission) => void;
  getAllMissions: () => void;
};

export const useMissionStore = create<ExtendedMission>(
  log((set: any, get: any) => ({
    mission: {} as ExtendedMission,
    missionsFilter: '',
    allMissions: null,
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
    setMission: async (id: string) => {
      set((state: any) => ({
        mission: {
          ...state.mission,
          id,
        },
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
  })),
);
