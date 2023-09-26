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

export const putMissionToSupa = async (mission: Mission) => {
  const { data, error } = await supabaseClient.from('missions').update(mission).match({ id: mission.id }).select('*');
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

export const calculateMissionExpensesIncomeUndist = async ({ id }: { id: string }) => {
  let { data: mission, error } = await supabaseClient.from('missions').select('*').match({ id });

  if (error) {
    console.error('error', error);
    return {
      error: error,
      message: 'Profile Failed to Load',
    };
  } else {
    let accumulatedIncome: number = 0;
    let accumulatedExpenses: number = 0;
    let undistributed: number = 0;
    if (mission?.[0].income_sets) {
      mission[0].income_sets?.forEach((income: any) => {
        if (!income.has_been_paid) {
          undistributed += Number(income.income_amount);
        }
        accumulatedIncome += Number(income.income_amount);
      });
    }
    if (mission?.[0].expense_sets) {
      mission[0].expense_sets?.forEach((expense: any) => {
        if (!expense.has_been_paid) {
          undistributed -= Number(expense.expense_amount);
        }
        accumulatedExpenses += Number(expense.expense_amount);
      });
    }
    const profits = accumulatedIncome - accumulatedExpenses;
    return {
      gross: accumulatedIncome,
      profit: profits,
      undistributed: undistributed,
    };
  }
};
