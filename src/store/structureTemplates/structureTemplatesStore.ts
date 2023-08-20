import { create } from 'zustand';
import { log } from '../zustandLog';
import type { StructureTemplate } from './structureTemplatesTypes';

export type ExtendedStructureTemplate = StructureTemplate & {
  [key: string | number]: any;
};

export const useStructureTemplatesStore = create<ExtendedStructureTemplate>(log((set: any, get: any) => ({})));
