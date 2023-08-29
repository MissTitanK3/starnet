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
export const getMissionFromSupa = async ({ id }: { id: number }) => {
  let { data: mission, error } = await supabaseClient.from('missions').select('*').match({ id });

  if (error) {
    console.error('error', error);
    return [];
  } else {
    return mission;
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

export const putSecurityCodeToSupa = async ({ id, code }: { id: string; code: string }) => {
  let { data: missionUpdate, error } = await supabaseClient
    .from('missions')
    .update({ op_sec_code: code })
    .match({ id });
  if (error) {
    console.error('error', error);
    return {
      error: error,
      message: 'Profile Failed to Load',
    };
  } else {
    return missionUpdate;
  }
};

export const getSecurityCodeVerificationFromSupa = async ({ id, code }: { id: string; code: string }) => {
  let { data: missionCode, error } = await supabaseClient.from('missions').select('op_sec_code').match({ id });

  if (error) {
    console.error('error', error);
    return {
      error: error,
      message: 'Profile Failed to Load',
    };
  } else {
    if (missionCode?.[0]?.op_sec_code === code) {
      return true;
    } else {
      return false;
    }
  }
};

export const postArchiveMissionToSupa = async ({ id, is_archived }: { id: string; is_archived: boolean }) => {
  let { data: missionUpdate, error } = await supabaseClient
    .from('missions')
    .update({ is_archived: is_archived })
    .match({ id });
  if (error) {
    console.error('error', error);
    return {
      error: error,
      message: 'Profile Failed to Load',
    };
  } else {
    return missionUpdate;
  }
};
