import { create } from 'zustand';
import { log } from '../zustandLog';
import type { Mission } from './missionsTypes';

export type ExtendedMission = Mission & {
  [key: string | number]: any;
};

export const useMissionStore = create<ExtendedMission>(log((set: any, get: any) => ({})));
