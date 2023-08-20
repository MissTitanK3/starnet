import { supabase } from '@/store/supabaseConfig';
import { Organization } from '@/store/organizations/organizationsTypes';

export type Props = {
  organization: Organization[];
};

export const getOrganizationsFromSupa = async () => {
  let { data: organizations, error } = await supabase.from('organizations').select('*');
  if (error) {
    return console.error('error', error);
  } else {
    return organizations;
  }
};
