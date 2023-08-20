import { create } from 'zustand';
import { log } from '../zustandLog';
import type { NetworkCalendar } from './networkCalendarTypes';

export type ExtendedNetworkCalendar = NetworkCalendar & {
  [key: string | number]: any;
};

export const useNetworkCalendarStore = create<ExtendedNetworkCalendar>(log((set: any, get: any) => ({})));
