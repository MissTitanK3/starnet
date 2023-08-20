import { create } from 'zustand';
import { log } from '../zustandLog';
import type { NetworkUpdates } from './networkUpdatesTypes';

export type ExtendedStructureTemplate = NetworkUpdates & {
  [key: string | number]: any;
};

export const useStructureTemplatesStore = create<ExtendedStructureTemplate>(log((set: any, get: any) => ({})));
