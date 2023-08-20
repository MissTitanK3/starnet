import { create } from 'zustand';
import { log } from '../zustandLog';
import { ModalStore } from './modalsTypes';

export const useModalStore = create<ModalStore>(
  log((set: any) => ({
    newExpenseVisibility: false,
    editNewExpenseVisibility: (newExpenseVisibility: boolean) => {
      set(() => ({ newExpenseVisibility: newExpenseVisibility }));
    },
  })),
);
