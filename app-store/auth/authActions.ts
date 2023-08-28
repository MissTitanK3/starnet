'use client';

import type { AuthData } from '@/app-store/auth/authTypes';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const supabaseClient = createClientComponentClient();

export type Props = {
  profile?: AuthData;
  activeId?: string;
};

export const getProfilesFromSupa = async () => {
  // let { data: profile, error } = await supabase.from('profile_data').select('*');
  // if (error) {
  //   return console.error('error', error);
  // } else {
  //   return profile;
  // }
};
export const getActiveProfileFromSupa = async ({ activeId }: Props) => {
  let { data: profile, error } = await supabaseClient.from('profile_data').select('*').match({ id: activeId });
  if (error) {
    console.error('error', error);
    return {
      error: error,
      message: 'Profile Failed to Load',
    };
  } else {
    return profile?.[0];
  }
};
