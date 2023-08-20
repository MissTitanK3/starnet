import { supabase } from '@/store/supabaseConfig';
import type { NetworkCalendar } from '@/store/networkCalendar/networkCalendarTypes';

export type Props = {
  networkCalendar: NetworkCalendar[];
};

export const getNetworkCalendarFromSupa = async () => {
  let { data: networkCalendar, error } = await supabase.from('network_calendar').select('*');
  if (error) {
    return console.error('error', error);
  } else {
    return networkCalendar;
  }
};
