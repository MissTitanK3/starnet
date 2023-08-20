import { create } from 'zustand';
import { log } from '../zustandLog';
import type { ProfileData } from './profileDataTypes';
import { getActiveProfileFromSupa } from './profileDataActions';

export type ExtendedProfile = ProfileData & {
  [key: string | number]: any;
};

export const useProfileStore = create<ExtendedProfile>(
  log((set: any, get: any) => ({
    profile: {} as ExtendedProfile,
    setProfile: (updatedProfile: ExtendedProfile) =>
      set((state: any) => ({
        profile: {
          ...state,
          ...updatedProfile,
        },
      })),
  })),
);
