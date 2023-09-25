import { UUID } from 'crypto';

export type Mission = {
  id: number;
  created_at: Date | null;
  mission_name: string;
  mission_desc: string | null;
  mission_scope: string | null;
  start_date?: string | Date | Date[] | null;
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
  expense_sets: ExpenseSet[] | null;
  income_sets: IncomeSet[] | null;
  mission_ratings: {}[] | null;
  chats: ChatObject[] | null;
  groups: MissionCenterSupportShip[] | null;
  creator: UUID;
  mission_type: string;
};

// export type MissionType = 'Profit' | 'Race' | 'RolePlay' | 'Elimination' | 'Loot Share' | 'Training';
export type MissionType = (typeof missionTypes)[number];
export const missionTypes = [
  {
    value: 'Profit',
    label: 'Profit',
  },
  {
    value: 'Race',
    label: 'Race',
  },
  {
    value: 'RolePlay',
    label: 'RolePlay',
  },
  {
    value: 'Elimination',
    label: 'Elimination',
  },
  {
    value: 'Loot Share',
    label: 'Loot Share',
  },
  {
    value: 'Training',
    label: 'Training',
  },
];

export const alertTypes = [
  {
    label: 'General Alert',
    value: 'General Alert',
  },
  {
    label: 'Contact Aquired',
    value: 'Contact Aquired',
  },
  {
    label: 'Contact Imminent',
    value: 'Contact Imminent',
  },
  {
    label: 'Contact Engaging',
    value: 'Contact Engaging',
  },
  {
    label: 'Avoid Contact',
    value: 'Avoid Contact',
  },
];

export type IncomeSet = {
  id?: string;
  created_at?: Date;
  contributer?: UUID;
  income_amount: number;
  income_label: string;
  has_been_paid?: boolean;
};

export type ExpenseSet = {
  id?: string;
  created_at?: Date;
  contributer?: UUID;
  expense_amount: number;
  expense_label: string;
  has_been_paid?: boolean;
};

export type ChatObject = {
  id?: string;
  mission_id: string | number;
  event_link_id?: number;
  sender: UUID;
  message: string;
  created_at: string | number;
  hidden: boolean;
  origin?: string;
  alertStatus?: 'General Alert' | 'Contact Aquired' | 'Contact Imminent' | 'Contact Engaging' | 'Avoid Contact';
};

export type RatingObject = {
  rating: 1 | 2 | 3 | 4 | 5;
  name: UUID;
};

export type MissionCenterSupportShip = {
  support_type?: missionCenterSupportShipsType;
  group_limit?: number | string;
  support_id: string;
  support_members: SupportMemberType[];
};

export type SupportMemberType = {
  memberRole?: string;
  member: UUID;
  selectedDate?: string;
  timeRangeStart?: string | Date | Date[] | null;
  timeRangeEnd?: string | Date | Date[] | null;
  hasBeenPaid?: boolean;
  accumulatedMins?: number;
  isClockedIn?: boolean;
  totalMembersInTimeClock?: number;
  timeclock?: TimeClockType[];
};

export type TimeClockType = {
  id?: number;
  clock_in?: Date;
  clock_out?: Date;
  total: number;
};

export type SupaBaseTemplate = {
  id?: number;
  creator_id: string; // PK
  created_at: Date;
  template_title: string;
  template_desc: string;
  template_groups: MissionCenterSupportShip[];
  created_by: UUID;
  is_global: boolean;
  is_restricted: boolean;
  is_personal: boolean;
  is_archived: boolean;
};

export type missionCenterSupportShipsType = (typeof missionCenterSupportShips)[number];
export const missionCenterSupportShips = [
  {
    value: 'Command*',
    label: 'Command*',
    customLabel: '',
  },
  {
    value: 'General Fleet',
    label: 'General Fleet',
    customLabel: '',
  },
  {
    value: 'Security',
    label: 'Security',
    customLabel: '',
  },
  {
    value: 'Repair',
    label: 'Repair',
    customLabel: '',
  },
  {
    value: 'Refuel',
    label: 'Refuel',
    customLabel: '',
  },
  {
    value: 'Scout',
    label: 'Scout',
    customLabel: '',
  },
  {
    value: 'Rearm',
    label: 'Rearm',
    customLabel: '',
  },
  {
    value: 'Mining',
    label: 'Mining',
    customLabel: '',
  },
  {
    value: 'Salvage',
    label: 'Salvage',
    customLabel: '',
  },
  {
    value: 'Other',
    label: 'Other',
    customLabel: '',
  },
];
