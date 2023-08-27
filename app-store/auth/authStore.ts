import { log } from './../zustandLog';
import { create } from 'zustand';
import type { AuthData } from './authTypes';
import { getActiveProfileFromSupa } from './authActions';

export type ExtendedProfile = AuthData & {
  [key: string | number]: any;
  profile: AuthData;
  isAuthenticated: boolean;
  setProfile: (id: string) => void;
  logout: () => void;
};

export const useAuthStore = create<ExtendedProfile>(
  log((set: any, get: any) => ({
    profile: {} as ExtendedProfile,
    isAuthenticated: false,
    setProfile: async (id: string) => {
      const data: any | null = await getActiveProfileFromSupa({
        activeId: id,
      });
      set((state: any) => ({
        isAuthenticated: true,
        profile: {
          ...data,
        },
      }));
    },
    logout: () => {
      set((state: any) => ({
        profile: {},
        isAuthenticated: false,
      }));
    },
  })),
);
