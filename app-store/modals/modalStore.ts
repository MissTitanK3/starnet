import { create } from 'zustand';
import { log } from '../zustandLog';

export type ExtendedMission = {
  [key: string | number]: any;
  newMissionModal: boolean;
  setNewMissionModal: (newMissionModal: boolean) => void;
};

export const useModalStore = create<ExtendedMission>(
  log((set: any, get: any) => ({
    newMissionModal: false,
    setNewMissionModal: async (newMissionModal: boolean) => {
      set((state: any) => ({
        newMissionModal,
      }));
    },
  })),
);
