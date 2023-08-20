import { supabase } from '@/store/supabaseConfig';
import type { Event } from '@/store/events/eventsTypes';

export type Props = {
  event: Event[];
};

export const getEventsFromSupa = async () => {
  let { data: events, error } = await supabase.from('events').select('*');
  if (error) {
    return console.error('error', error);
  } else {
    return events;
  }
};
