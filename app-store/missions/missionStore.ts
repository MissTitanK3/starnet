import { create } from 'zustand';
import { log } from '../zustandLog';
import type { Mission } from './missionTypes';
import { getMissionsFromSupa } from './missionActions';

export type ExtendedMission = Mission & {
  [key: string | number]: any;
  mission: Mission;
  missionsFilter: string;
  allMissions: Mission[];
  setMissionFilter: (filter: string) => void;
  setMission: (id: string) => void;
  addMission: (mission: Mission) => void;
  getAllMissions: () => void;
};

export const useMissionStore = create<ExtendedMission>(
  log((set: any, get: any) => ({
    mission: {} as ExtendedMission,
    missionsFilter: '',
    allMissions: [] as Mission[],
    setMissionFilter: async (filter: string) => {
      set((state: any) => ({
        missionsFilter: filter,
        allMissions: state.allMissions.filter((mission: Mission) => {
          return mission.title.toLowerCase().includes(filter.toLowerCase());
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
      set((state: any) => ({
        allMissions: [...state.allMissions, mission],
      }));
    },
    getAllMissions: async () => {
      const missions = await getMissionsFromSupa();
      console.log('missions', missions);
      set((state: any) => ({
        allMissions: missions,
      }));
    },
  })),
);
