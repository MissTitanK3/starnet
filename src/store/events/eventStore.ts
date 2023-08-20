import { create } from 'zustand';
import { log } from '../zustandLog';
import type { Event } from './eventsTypes';

export type ExtendedEvents = Event & {
  [key: string | number]: any;
};

export const useEventsStore = create<ExtendedEvents>(log((set: any, get: any) => ({})));
