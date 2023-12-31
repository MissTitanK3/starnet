import type { AuthData } from '@/app-store/auth/authTypes';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const supabaseClient = createClientComponentClient();

export type Props = {
  profile?: AuthData;
  activeId?: string;
  avatar?: string;
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

export const updateProfileAvatarInSupara = async ({ activeId, avatar }: Props) => {
  let { data: profile, error } = await supabaseClient
    .from('profile_data')
    .update({ profile_avatar: avatar })
    .match({ id: activeId });
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

export const getProfileFromSupa = async ({ activeId }: Props) => {
  let { data: user, error } = await supabaseClient.from('profile_data').select('*').match({ id: activeId });
  if (error) {
    console.error('error', error);
    return {
      error: error,
      message: 'Profile Failed to Load',
    };
  } else {
    return user;
  }
};

export const getMissionEventFromSupa = async ({ activeId }: Props) => {
  let { data: event, error } = await supabaseClient.from('events').select('*').match({ id: activeId });
  if (error) {
    console.error('error', error);
    return {
      error: error,
      message: 'Profile Failed to Load',
    };
  } else {
    return {
      name: event?.[0]?.event_name,
      id: event?.[0]?.id,
    };
  }
};

export const getAllProfilesFromSupaForDropdown = async () => {
  let { data: profiles, error } = await supabaseClient.from('profile_data').select('in_game_name, id, network_rank');
  if (error) {
    console.error('error', error);
    return {
      error: error,
      message: 'Profile Failed to Load',
    };
  } else {
    return profiles;
  }
};
