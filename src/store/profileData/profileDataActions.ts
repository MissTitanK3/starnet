import { supabase } from '@/store/supabaseConfig';
import type { ProfileData } from '@/store/profileData/profileDataTypes';

export type Props = {
  profile?: ProfileData;
  activeId?: string;
};

export const getProfilesFromSupa = async () => {
  let { data: profile, error } = await supabase.from('profile_data').select('*');
  if (error) {
    return console.error('error', error);
  } else {
    return profile;
  }
};
export const getActiveProfileFromSupa = async ({ activeId }: Props) => {
  let { data: profile, error } = await supabase.from('profile_data').select('*').match({ id: activeId });
  if (error) {
    console.error('error', error);
    return {};
  } else {
    return profile;
  }
};
