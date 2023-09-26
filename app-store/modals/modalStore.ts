import { UUID } from 'crypto';
import { create } from 'zustand';
import { log } from '../zustandLog';
import { AuthData } from '../auth/authTypes';

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
  addMemberModal: {
    isVisibile: boolean;
    shipNumber: string;
  };
  setAddMemberModal: (addMemberModal: { isVisibile: boolean; shipNumber: string }) => void;
  updateRoleModal: {
    isVisibile: boolean;
    shipNumber?: string;
    member?: AuthData;
    currentRole?: string;
  };
  setUpdateRoleModal: (updateRoleModal: {
    isVisibile: boolean;
    shipNumber?: string;
    member?: AuthData;
    currentRole: string;
  }) => void;
  addIncomeModal: boolean;
  setAddIncomeModal: (addIncomeModal: boolean) => void;
  addExpenseModal: boolean;
  setAddExpenseModal: (addExpenseModal: boolean) => void;
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
    addMemberModal: {
      isVisibile: false,
      shipNumber: '',
    },
    setAddMemberModal: async (addMemberModal: boolean) => {
      set((state: any) => ({
        addMemberModal,
      }));
    },
    updateRoleModal: {
      isVisibile: false,
      shipNumber: '',
      member: undefined,
      currentRole: '',
    },
    setUpdateRoleModal: async (updateRoleModal: boolean) => {
      set((state: any) => ({
        updateRoleModal,
      }));
    },
    addIncomeModal: false,
    setAddIncomeModal: async (addIncomeModal: boolean) => {
      set((state: any) => ({
        addIncomeModal,
      }));
    },
    addExpenseModal: false,
    setAddExpenseModal: async (addExpenseModal: boolean) => {
      set((state: any) => ({
        addExpenseModal,
      }));
    },
  })),
);
