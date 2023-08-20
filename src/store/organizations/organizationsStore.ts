import { create } from 'zustand';
import { log } from '../zustandLog';
import type { Organization } from './organizationsTypes';

export type ExtendedOrganization = Organization & {
  [key: string | number]: any;
};

export const useOrganizationStore = create<ExtendedOrganization>(log((set: any, get: any) => ({})));
