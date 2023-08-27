import { supabase } from '@/app-store/supabaseConfig';
import type { Mission } from '@/app-store/missions/missionTypes';

export type Props = {
  Mission: Mission[];
};

export const getMissionsFromSupa = async () => {
  let { data: missions, error } = await supabase.from('missions').select('*');
  if (error) {
    return console.error('error', error);
  } else {
    return missions;
  }
};
