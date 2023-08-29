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
  expense_sets: ExpenseSet[] | null;
  income_sets: IncomeSet[] | null;
  mission_ratings: {}[] | null;
  chats: ChatObject[] | null;
  members: MissionCenterSupportShip[] | null;
  creator: UUID;
  mission_type: MissionType;
};

export type MissionType = 'Profit' | 'Race' | 'RolePlay' | 'Elimination' | 'Loot Share' | 'Training';

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
  group_limit?: number;
  support_id: number;
  support_ship_costs?: {
    gross_income?: number;
    insurance_costs?: number;
    medical_costs?: number;
    hangar_costs?: number;
    taxes_costs?: number;
    refuel_costs?: number;
    rearm_costs?: number;
    maintenance_costs?: number;
    profit?: number;
  };
  support_members: {
    isShipLeader?: boolean;
    isShipPilot?: boolean;
    member: UUID;
    selectedDate?: string;
    timeRangeStart?: string[];
    timeRangeEnd?: string;
    hasBeenPaid?: boolean;
    accumulatedMins?: number;
    isClockedIn?: boolean;
    totalMembersInTimeClock?: number;
    timeclock?: {
      id?: number;
      clock_in?: Date;
      clock_out?: Date;
      total: number;
    }[];
  }[];
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
    value: 'Command',
    label: 'Command',
    customLabel: '',
  },
  {
    value: 'Intelligence',
    label: 'Intelligence',
    customLabel: '',
  },
  {
    value: 'Operations',
    label: 'Operations',
    customLabel: '',
  },
  {
    value: 'Medical',
    label: 'Medical',
    customLabel: '',
  },
  {
    value: 'Logistics',
    label: 'Logistics',
    customLabel: '',
  },
  {
    value: 'Communications',
    label: 'Communications',
    customLabel: '',
  },
  {
    value: 'Training',
    label: 'Training',
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
    value: 'Fleet',
    label: 'Fleet',
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
];
