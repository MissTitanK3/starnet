import { UUID } from 'crypto';

export type Mission = {
  id: number;
  created_at: Date | null;
  mission_name: string;
  mission_desc: string | null;
  mission_scope: string | null;
  start_date: Date | null;
  gross_income: number | null;
  profit: number | null;
  insurance: number | null;
  medical: number | null;
  misc: number | null;
  taxes: number | null;
  refuel: number | null;
  rearm: number | null;
  maintenance: number | null;
  present_in_mission: number | null;
  is_archived: boolean | null;
  optimal_participation: number | null;
  event_id: number | null;
  op_sec_code: string | null;
  expense_sets: {}[] | null;
  income_sets: {}[] | null;
  mission_ratings: {}[] | null;
  chats: {}[] | null;
  members: {}[] | null;
  creator: UUID;
};
