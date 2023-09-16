import { create } from 'zustand';
import { log } from '../zustandLog';

export type ExtendedMission = {
  [key: string | number]: any;
  newMissionModal: boolean;
  setNewMissionModal: (newMissionModal: boolean) => void;
  actionsOpen: boolean;
  setActionsOpen: (isOpen: boolean) => void;
  editMissionModal: boolean;
  setEditMissionModal: (editMissionModal: boolean) => void;
  createSupportModal: boolean;
  setCreateSupportModal: (createSupportModal: boolean) => void;
  addMemberModal: boolean;
  setAddMemberModal: (addMemberModal: boolean) => void;
};

export const useModalStore = create<ExtendedMission>(
  log((set: any, get: any) => ({
    newMissionModal: false,
    setNewMissionModal: async (newMissionModal: boolean) => {
      set((state: any) => ({
        newMissionModal,
      }));
    },
    actionsOpen: false,
    setActionsOpen: async (isOpen: boolean) => {
      set((state: any) => ({
        actionsOpen: isOpen,
      }));
    },
    editMissionModal: false,
    setEditMissionModal: async (editMissionModal: boolean) => {
      set((state: any) => ({
        editMissionModal,
      }));
    },
    createSupportModal: false,
    setCreateSupportModal: async (createSupportModal: boolean) => {
      set((state: any) => ({
        createSupportModal,
      }));
    },
    addMemberModal: false,
    setAddMemberModal: async (addMemberModal: boolean) => {
      set((state: any) => ({
        addMemberModal,
      }));
    },
  })),
);
