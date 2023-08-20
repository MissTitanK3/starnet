import { supabase } from '@/store/supabaseConfig';
import type { ProfileData } from '@/store/profileData/profileDataTypes';

export type Props = {
  profile: ProfileData;
};

export const getProfilesFromSupa = async () => {
  let { data: profile, error } = await supabase.from('profile_data').select('*');
  if (error) {
    return console.error('error', error);
  } else {
    return profile;
  }
};
