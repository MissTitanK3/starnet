import { supabase } from '@/store/supabaseConfig';
import type { StructureTemplate } from '@/store/structureTemplates/structureTemplatesTypes';

export type Props = {
  structureTemplate: StructureTemplate[];
};

export const getTemplatesFromSupa = async () => {
  let { data: templates, error } = await supabase.from('structure_templates').select('*');
  if (error) {
    return console.error('error', error);
  } else {
    return templates;
  }
};
