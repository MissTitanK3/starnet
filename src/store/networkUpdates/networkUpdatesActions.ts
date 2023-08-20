import { supabase } from '@/store/supabaseConfig';
import type { NetworkUpdates } from '@/store/networkUpdates/networkUpdatesTypes';

export type Props = {
  networkUpdates: NetworkUpdates[];
};

export const getNetworkUpdatesFromSupa = async () => {
  let { data: networkUpdates, error } = await supabase.from('network_updates').select('*');
  if (error) {
    return console.error('error', error);
  } else {
    return networkUpdates;
  }
};
