import type { Mission } from '@/app-store/missions/missionTypes';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const supabaseClient = createClientComponentClient();

export type Props = {
  Mission: Mission[];
};

export const getMissionsFromSupa = async () => {
  let { data: missions, error } = await supabaseClient
    .from('missions')
    .select('id, mission_name, start_date, mission_scope, present_in_mission, optimal_participation')
    .order('start_date', { ascending: false });

  if (error) {
    console.error('error', error);
    return [];
  } else {
    return missions;
  }
};

export const postMissionToSupa = async (mission: Mission) => {
  const { data, error } = await supabaseClient.from('missions').insert([mission]).select('*');
  if (error) {
    console.error('error', error);
    return;
  } else {
    return data;
  }
};
