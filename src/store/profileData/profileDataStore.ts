import { create } from 'zustand';
import { log } from '../zustandLog';
import type { ProfileData } from './profileDataTypes';

export type ExtendedProfile = ProfileData & {
  [key: string | number]: any;
};

export const useProfileStore = create<ExtendedProfile>(log((set: any, get: any) => ({})));
