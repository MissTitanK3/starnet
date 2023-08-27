import { BilletObjType } from '@/app-ui/UiTypes';
import { UUID } from 'crypto';

export type AuthData = {
  id: number;
  created_at: string;
  recruited_by: UUID;
  date_promoted: string;
  date_joined: string;
  is_meritorious: boolean;
  in_game_name: string;
  dicord_name: string;
  rsi_id: string;
  mission_count: number;
  network_rank: RankObjType;
  recruitment_status: {};
  network_status: CommunityStatus;
  network_department: {};
  last_signed_in: string;
  network_ambassador: RankObjType;
  bravo_billet: {};
  has_read_rules: boolean;
  profile_providerId: string;
  profile_avatar: string;
  is_fed_level: boolean;
  fed_stats: {};
  is_fleet_level: boolean;
  is_company_level: boolean;
  company_stats: {};
  is_wing_level: boolean;
  wing_stats: {};
  is_flight_level: boolean;
  flight_stats: {};
  is_ic: boolean;
  is_banned: boolean;
  is_beta_tester: boolean;
  patreon_sub_level: {};
  is_first_fifty: boolean;
  org_memberships: [];
};

export type AuthUser = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: string[];
  };
  user_metadata: {
    avatar_url: string;
    email: string;
    email_verified: boolean;
    full_name: string;
    iss: string;
    name: string;
    picture: string;
    provider_id: string;
    sub: string;
  };
  identities: {
    id: string;
    user_id: string;
    identity_data: {
      avatar_url: string;
      email: string;
      email_verified: boolean;
      full_name: string;
      iss: string;
      name: string;
      picture: string;
      provider_id: string;
      sub: string;
    };
    provider: string;
    last_sign_in_at: string;
    created_at: string;
    updated_at: string;
  }[];
  created_at: string;
  updated_at: string;
};

export type RankObjType = {
  label: string;
  value: number;
  grade: string;
  uniform_color: string;
  abbreviation: string;
  profit_share?: number;
  description: string;
};

export type CommunityStatusObjType = {
  label: string;
  value: number;
  color: string;
};

export const CommunityStatus: CommunityStatusObjType[] = [
  { label: 'Active', value: 0, color: 'green' },
  { label: 'Not Active', value: 1, color: 'red' },
  { label: 'LOA', value: 2, color: 'yellow' },
  { label: 'Info Needed', value: 3, color: 'orange' },
  { label: '8 Weeks MIA', value: 4, color: 'red' },
  { label: '12 Weeks MIA', value: 5, color: 'red' },
  { label: '16 Weeks MIA', value: 6, color: 'red' },
  { label: '20 Weeks MIA', value: 7, color: 'red' },
];

export type CommunityStatus =
  | [
      {
        label: 'Active';
        value: 0;
        color: 'green';
      },
      {
        label: 'Not Active';
        value: 1;
        color: 'red';
      },
      {
        label: 'LOA';
        value: 2;
        color: 'yellow';
      },
      {
        label: 'Info Needed';
        value: 3;
        color: 'orange';
      },
      {
        label: '1 MIA';
        value: 4;
        color: 'red';
      },
      {
        label: '2 MIA';
        value: 5;
        color: 'red';
      },
      {
        label: '3 MIA';
        value: 6;
        color: 'red';
      },
      {
        label: '4 MIA';
        value: 7;
        color: 'red';
      },
    ]
  | CommunityStatusObjType[];

export const AmbasadorLevel: RankObjType[] = [
  {
    label: 'Level 0',
    value: 0,
    description: 'IC',
    grade: 'IC',
    uniform_color: '#8E7E70',
    abbreviation: 'IC',
  },
  {
    label: 'Level 1',
    value: 1,
    description: 'Member',
    grade: 'Ambassador',
    uniform_color: '#B17C7C',
    abbreviation: 'M',
  },
  {
    label: 'Level 2',
    value: 2,
    description: 'Recognized Member',
    grade: 'Recognized Ambassador',
    uniform_color: '#D3A76A',
    abbreviation: 'RM',
  },
  {
    label: 'Level 3',
    value: 3,
    description: 'Trusted Member',
    grade: 'Trusted Ambassador',
    uniform_color: '#D1C67B',
    abbreviation: 'TM',
  },
  {
    label: 'Level 4',
    value: 4,
    description: 'Moderating Member',
    grade: 'Moderating Ambassador',
    uniform_color: '#7B9E7F',
    abbreviation: 'MM',
  },
  {
    label: 'Level 5',
    value: 5,
    description: 'Administrative Member',
    grade: 'Administrative Ambassador',
    uniform_color: '#6B8DAE',
    abbreviation: 'AM',
  },
  {
    label: 'Level 6',
    value: 6,
    description: 'Executive Ambassador',
    grade: 'Executive Member',
    uniform_color: '#877899',
    abbreviation: 'EM',
  },
];

export const Ranks: RankObjType[] = [
  {
    label: 'Independent Contractor',
    value: -1,
    grade: 'IC',
    uniform_color: 'silver',
    abbreviation: 'IC',
    profit_share: 1,
    description: 'Independent support staff',
  },
  {
    label: 'Crewman Recruit',
    value: 0,
    grade: 'E1',
    uniform_color: 'silver',
    abbreviation: 'CRMR',
    profit_share: 4.2,
    description: 'Newly recruited crewman',
  },
  {
    label: 'Crewman Apprentice',
    value: 1,
    grade: 'E2',
    uniform_color: 'silver',
    abbreviation: 'CRMA',
    profit_share: 4.1,
    description: 'Crewman in training',
  },
  {
    label: 'Crewman',
    value: 2,
    grade: 'E3',
    uniform_color: 'silver',
    abbreviation: 'CRM',
    profit_share: 4,
    description: 'Crewman',
  },
  {
    label: 'Petty Officer 3rd Class',
    value: 3,
    grade: 'E4',
    uniform_color: '#7F6000',
    abbreviation: 'PO3',
    profit_share: 3.9,
    description: 'Crewman who is trusted to lead junior members in their own ship',
  },
  {
    label: 'Petty Officer 2nd Class',
    value: 4,
    grade: 'E5',
    uniform_color: '#7F6000',
    abbreviation: 'PO2',
    profit_share: 3.8,
    description: 'Crewman with 6 months of service',
  },
  {
    label: 'Petty Officer 1st Class',
    value: 5,
    grade: 'E6',
    uniform_color: '#7F6000',
    abbreviation: 'PO1',
    profit_share: 3.7,
    description: 'Crewman with 9 months of service',
  },
  {
    label: 'Chief Petty Officer',
    value: 6,
    grade: 'E7',
    uniform_color: '#7F6000',
    abbreviation: 'CPO',
    profit_share: 3.6,
    description: 'Crewman with 12 months of service',
  },
  {
    label: 'Senior Chief Petty Officer',
    value: 7,
    grade: 'E8',
    uniform_color: '#7F6000',
    abbreviation: 'SCPO',
    profit_share: 3.5,
    description: 'Crewman with 18 months of service',
  },
  {
    label: 'Master Chief Petty Officer',
    value: 8,
    grade: 'E9',
    uniform_color: '#7F6000',
    abbreviation: 'MCPO',
    profit_share: 3.4,
    description: 'Crewman with 24 months of service',
  },
  {
    label: 'Command Master Chief Petty Officer',
    value: 9,
    grade: 'E10',
    uniform_color: '#7F6000',
    abbreviation: 'CMCPO',
    profit_share: 3.3,
    description: 'Crewman with 36 months of service',
  },
  {
    label: 'Fleet Master Chief Petty Officer',
    value: 10,
    grade: 'E11',
    uniform_color: '#7F6000',
    abbreviation: 'FMCPO',
    profit_share: 3.2,
    description: 'Crewman with 48 months of service',
  },
  {
    label: 'Chief of Federation Operations',
    value: 11,
    grade: 'E12',
    uniform_color: '#7F6000',
    abbreviation: 'CFO',
    profit_share: 3.1,
    description: 'Crewman with 60 months of service',
  },
  {
    label: 'Retired',
    value: 12,
    grade: 'E13',
    uniform_color: 'silver',
    abbreviation: 'CFO(R)',
    profit_share: 3,
    description: 'Retired Crewman',
  },
  {
    label: 'Warrant Officer',
    value: 13,
    grade: 'W1',
    uniform_color: 'silver',
    abbreviation: 'WO',
    profit_share: 3.5,
    description: 'Warrant Officer',
  },
  {
    label: 'Chief Warrant Officer 2',
    value: 14,
    grade: 'W2',
    uniform_color: 'silver',
    abbreviation: 'CWO2',
    profit_share: 3.2,
    description: 'Chief Warrant Officer 2',
  },
  {
    label: 'Chief Warrant Officer 3',
    value: 15,
    grade: 'W3',
    uniform_color: 'silver',
    abbreviation: 'CWO3',
    profit_share: 3,
    description: 'Chief Warrant Officer 3',
  },
  {
    label: 'Chief Warrant Officer 4',
    value: 16,
    grade: 'W4',
    uniform_color: 'silver',
    abbreviation: 'CWO4',
    profit_share: 2.8,
    description: 'Chief Warrant Officer 4',
  },
  {
    label: 'Chief Warrant Officer 5',
    value: 17,
    grade: 'W5',
    uniform_color: 'silver',
    abbreviation: 'CWO5',
    profit_share: 2.6,
    description: 'Chief Warrant Officer 5',
  },
  {
    label: 'Chief Warrant Officer 6',
    value: 18,
    grade: 'W6',
    uniform_color: 'silver',
    abbreviation: 'CWO6',
    profit_share: 2.4,
    description: 'Chief Warrant Officer 6',
  },
  {
    label: 'Ensign',
    value: 19,
    grade: 'O1',
    uniform_color: '#660000',
    abbreviation: 'ENS',
    profit_share: 3,
    description: 'Ensign',
  },
  {
    label: 'Lieutenant (Junior Grade)',
    value: 20,
    grade: 'O2',
    uniform_color: '#660000',
    abbreviation: 'LTJG',
    profit_share: 2.8,
    description: 'Lieutenant (Junior Grade)',
  },
  {
    label: 'Lieutenant',
    value: 21,
    grade: 'O3',
    uniform_color: '#660000',
    abbreviation: 'LT',
    profit_share: 2.6,
    description: 'Lieutenant',
  },
  {
    label: 'Lieutenant Commander',
    value: 22,
    grade: 'O4',
    uniform_color: '#660000',
    abbreviation: 'LCDR',
    profit_share: 2.4,
    description: 'Lieutenant Commander',
  },
  {
    label: 'Commander',
    value: 23,
    grade: 'O5',
    uniform_color: '#660000',
    abbreviation: 'CDR',
    profit_share: 2.2,
    description: 'Commander',
  },
  {
    label: 'Captain',
    value: 24,
    grade: 'O6',
    uniform_color: '#660000',
    abbreviation: 'CAPT',
    profit_share: 2,
    description: 'Captain',
  },
  {
    label: 'Commadore',
    value: 25,
    grade: 'A1',
    uniform_color: '#274E13',
    abbreviation: 'COM',
    profit_share: 1.8,
    description: 'Commadore',
  },
  {
    label: 'Rear Admiral',
    value: 26,
    grade: 'A2',
    uniform_color: '#274E13',
    abbreviation: 'RADM',
    profit_share: 1.6,
    description: 'Rear Admiral',
  },
  {
    label: 'Vice Admiral',
    value: 27,
    grade: 'A3',
    uniform_color: '#274E13',
    abbreviation: 'VADM',
    profit_share: 1.4,
    description: 'Vice Admiral',
  },
  {
    label: 'Admiral',
    value: 28,
    grade: 'A4',
    uniform_color: '#274E13',
    abbreviation: 'ADM',
    profit_share: 1.2,
    description: 'Admiral',
  },
  {
    label: 'Fleet Admiral',
    value: 29,
    grade: 'A5',
    uniform_color: '#274E13',
    abbreviation: 'FADM',
    profit_share: 1,
    description: 'Fleet Admiral',
  },
];

export type AphaBilletsType = typeof AlphaBillets;
export const AlphaBillets: BilletObjType[] = [
  {
    label: 'Federation Commanding Officer',
    value: 0,
    abbreviation: 'FedCO',
    billetType: 'CommandBillets',
  },
  {
    label: 'Federation Executive Officer',
    value: 1,
    abbreviation: 'FedXO',
    billetType: 'CommandBillets',
  },
  {
    label: 'Exploration Commanding Officer',
    value: 2,
    abbreviation: 'ExpCO',
    billetType: 'CommandBillets',
  },
  {
    label: 'Exploration Executive Officer',
    value: 3,
    abbreviation: 'ExpXO',
    billetType: 'CommandBillets',
  },
  // {
  //   label: 'Commonwealth Commanding Officer',
  //   value: 4,
  //   abbreviation: 'ComCO',
  //   billetType: 'CommandBillets',
  // },
  // {
  //   label: 'Commonwealth Executive Officer',
  //   value: 5,
  //   abbreviation: 'ComXO',
  //   billetType: 'CommandBillets',
  // },
  // {
  //   label: 'Financial Commanding Officer',
  //   value: 6,
  //   abbreviation: 'FinCO',
  //   billetType: 'CommandBillets',
  // },
  // {
  //   label: 'Financial Executive Officer',
  //   value: 7,
  //   abbreviation: 'FinXO',
  //   billetType: 'CommandBillets',
  // },
  // {
  //   label: 'Casino Commanding Officer',
  //   value: 8,
  //   abbreviation: 'CasCO',
  //   billetType: 'CommandBillets',
  // },
  // {
  //   label: 'Casino Executive Officer',
  //   value: 9,
  //   abbreviation: 'CasXO',
  //   billetType: 'CommandBillets',
  // },
  // {
  //   label: 'Academy Commanding Officer',
  //   value: 10,
  //   abbreviation: 'AcaCO',
  //   billetType: 'CommandBillets',
  // },
  // {
  //   label: 'Academy Executive Officer',
  //   value: 11,
  //   abbreviation: 'AcaXO',
  //   billetType: 'CommandBillets',
  // },
  {
    label: 'Fleet Commanding Officer',
    value: 12,
    abbreviation: 'FltCO',
    billetType: 'FleetBillets',
  },
  {
    label: 'Fleet Executive Officer',
    value: 13,
    abbreviation: 'FltXO',
    billetType: 'FleetBillets',
  },
  {
    label: 'Chief of Fleet Operations',
    value: 14,
    abbreviation: 'CFO',
    billetType: 'FleetBillets',
  },
  {
    label: 'Chief of Fleet Personnel',
    value: 15,
    abbreviation: 'CFP',
    billetType: 'FleetBillets',
  },
  {
    label: 'Chief of Fleet Recruiting',
    value: 16,
    abbreviation: 'CFRec',
    billetType: 'FleetBillets',
  },
  {
    label: 'Chief of Fleet Relations',
    value: 17,
    abbreviation: 'CFRel',
    billetType: 'FleetBillets',
  },
  {
    label: 'Chief of Fleet Logistics',
    value: 18,
    abbreviation: 'CFL',
    billetType: 'FleetBillets',
  },
  {
    label: 'Company Commanding Officer',
    value: 19,
    abbreviation: 'CompCO',
    billetType: 'CompanyBillets',
  },
  {
    label: 'Company Executive Officer',
    value: 20,
    abbreviation: 'CompXO',
    billetType: 'CompanyBillets',
  },
  {
    label: 'Company Senior Chief',
    value: 21,
    abbreviation: 'CompSC',
    billetType: 'CompanyBillets',
  },
  {
    label: 'Company Chief',
    value: 22,
    abbreviation: 'CompC',
    billetType: 'CompanyBillets',
  },
  {
    label: 'Personnel Officer',
    value: 23,
    abbreviation: 'CFP',
    billetType: 'CompanyBillets',
  },
  {
    label: 'Recruiting Officer',
    value: 24,
    abbreviation: 'CFRec',
    billetType: 'CompanyBillets',
  },
  {
    label: 'Relations Officer',
    value: 25,
    abbreviation: 'CFRel',
    billetType: 'CompanyBillets',
  },
  {
    label: 'Logistics Officer',
    value: 26,
    abbreviation: 'CFL',
    billetType: 'CompanyBillets',
  },
  {
    label: 'Wing Commanding Officer',
    value: 27,
    abbreviation: 'WingCO',
    billetType: 'WingBillets',
  },
  {
    label: 'Wing Executive Officer',
    value: 28,
    abbreviation: 'WingXO',
    billetType: 'WingBillets',
  },
  {
    label: 'Wing Senior Chief',
    value: 29,
    abbreviation: 'WingSC',
    billetType: 'WingBillets',
  },
  {
    label: 'Wing Chief',
    value: 30,
    abbreviation: 'WingC',
    billetType: 'WingBillets',
  },
  {
    label: 'Wing Corpsman',
    value: 31,
    abbreviation: 'WingCM',
    billetType: 'WingBillets',
  },
  {
    label: 'Personnel Specialist',
    value: 32,
    abbreviation: 'WingPS',
    billetType: 'WingBillets',
  },
  {
    label: 'Recruiting Specialist',
    value: 33,
    abbreviation: 'WingRecS',
    billetType: 'WingBillets',
  },
  {
    label: 'Relations Specialist',
    value: 34,
    abbreviation: 'WingRelS',
    billetType: 'WingBillets',
  },
  {
    label: 'Logistics Specialist',
    value: 35,
    abbreviation: 'WingLS',
    billetType: 'WingBillets',
  },
  {
    label: 'Flight Leader',
    value: 36,
    abbreviation: 'FltLdr',
    billetType: 'WingBillets',
  },
  {
    label: 'Flight Corpsman',
    value: 37,
    abbreviation: 'FltCM',
    billetType: 'WingBillets',
  },
  {
    label: 'Flight Crew',
    value: 38,
    abbreviation: 'FltCrew',
    billetType: 'WingBillets',
  },
  // {
  //   label: 'Director',
  //   value: 39,
  //   abbreviation: 'Dir',
  //   billetType: 'AcademyBillets',
  // },
  // {
  //   label: 'Professor',
  //   value: 40,
  //   abbreviation: 'Prof',
  //   billetType: 'AcademyBillets',
  // },
  // {
  //   label: 'Assistant Professor',
  //   value: 41,
  //   abbreviation: 'AsstProf',
  //   billetType: 'AcademyBillets',
  // },
  // {
  //   label: 'Senior Student',
  //   value: 42,
  //   abbreviation: 'SrStu',
  //   billetType: 'AcademyBillets',
  // },
  // {
  //   label: 'Student',
  //   value: 43,
  //   abbreviation: 'Stu',
  //   billetType: 'AcademyBillets',
  // },
  // {
  //   label: 'Director',
  //   value: 44,
  //   abbreviation: 'Dir',
  //   billetType: 'FinanceBillets',
  // },
  // {
  //   label: 'System Manager',
  //   value: 45,
  //   abbreviation: 'SysMgr',
  //   billetType: 'FinanceBillets',
  // },
  // {
  //   label: 'Branch Manager',
  //   value: 46,
  //   abbreviation: 'BrMgr',
  //   billetType: 'FinanceBillets',
  // },
  // {
  //   label: 'Loan Officer',
  //   value: 47,
  //   abbreviation: 'LO',
  //   billetType: 'FinanceBillets',
  // },
  // {
  //   label: 'Teller',
  //   value: 48,
  //   abbreviation: 'Teller',
  //   billetType: 'FinanceBillets',
  // },
  // {
  //   label: 'Account Holder',
  //   value: 49,
  //   abbreviation: 'AcctHld',
  //   billetType: 'FinanceBillets',
  // },
  // {
  //   label: 'Director of Commonwealth',
  //   value: 50,
  //   abbreviation: 'Dir',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Vice Director',
  //   value: 51,
  //   abbreviation: 'VDO',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Assistant Director',
  //   value: 52,
  //   abbreviation: 'ADO',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'VA Officer',
  //   value: 53,
  //   abbreviation: 'VAO',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Head of Civil Services',
  //   value: 54,
  //   abbreviation: 'HCS',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Head of Engineering Services',
  //   value: 55,
  //   abbreviation: 'HES',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Head of Police Services',
  //   value: 56,
  //   abbreviation: 'HPS',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Head of Healt Services',
  //   value: 57,
  //   abbreviation: 'HHS',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Department Commander',
  //   value: 58,
  //   abbreviation: 'DCmdr',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Commander',
  //   value: 59,
  //   abbreviation: 'Cmdr',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Chief Judge',
  //   value: 60,
  //   abbreviation: 'CJ',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Personnel Supervisor',
  //   value: 61,
  //   abbreviation: 'PS',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Supervisor',
  //   value: 62,
  //   abbreviation: 'Sup',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Judge',
  //   value: 63,
  //   abbreviation: 'J',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Personnel Manager',
  //   value: 64,
  //   abbreviation: 'PM',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Manager',
  //   value: 65,
  //   abbreviation: 'M',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Public Relations',
  //   value: 66,
  //   abbreviation: 'PR',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Internal Affairs',
  //   value: 67,
  //   abbreviation: 'IA',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Junior Judge',
  //   value: 68,
  //   abbreviation: 'JJ',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Shift Leader',
  //   value: 69,
  //   abbreviation: 'SL',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Procecuting Attorney',
  //   value: 70,
  //   abbreviation: 'P',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Defendece Attorney',
  //   value: 71,
  //   abbreviation: 'D',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Lawyer',
  //   value: 72,
  //   abbreviation: 'L',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Response Unit',
  //   value: 73,
  //   abbreviation: 'RU',
  //   billetType: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Host',
  //   value: 74,
  //   abbreviation: 'Host',
  //   billetType: 'CasinoBillets',
  // },
  // {
  //   label: 'Finance Manager',
  //   value: 75,
  //   abbreviation: 'FM',
  //   billetType: 'CasinoBillets',
  // },
  // {
  //   label: 'Floor Manager',
  //   value: 76,
  //   abbreviation: 'FlM',
  //   billetType: 'CasinoBillets',
  // },
  // {
  //   label: 'Flight Crew',
  //   value: 77,
  //   abbreviation: 'FlCrew',
  //   billetType: 'CasinoBillets',
  // },
  // {
  //   label: 'Flight Corpsman',
  //   value: 78,
  //   abbreviation: 'FlCM',
  //   billetType: 'CasinoBillets',
  // },
  // {
  //   label: 'Dealer',
  //   value: 79,
  //   abbreviation: 'Dlr',
  //   billetType: 'CasinoBillets',
  // },
  // {
  //   label: 'Account Holder',
  //   value: 80,
  //   abbreviation: 'AcctHld',
  //   billetType: 'CasinoBillets',
  // },
];

export type BilletCatType = typeof BilletsCatTypes;
export const BilletsCatTypes = [
  {
    label: 'Command Billets',
    value: 'CommandBillets',
  },
  {
    label: 'Fleet Billets',
    value: 'FleetBillets',
  },
  {
    label: 'Company Billets',
    value: 'CompanyBillets',
  },
  {
    label: 'Wing Billets',
    value: 'WingBillets',
  },
  {
    label: 'Flight Billets',
    value: 'FlightBillets',
  },
  // {
  //   label: 'Finance Billets',
  //   value: 'FinanceBillets',
  // },
  // {
  //   label: 'Commonwealth Billets',
  //   value: 'CommonwealthBillets',
  // },
  // {
  //   label: 'Casino Billets',
  //   value: 'CasinoBillets',
  // },
];

export type OrganizationBankAccountType = {
  id: number;
  name: string;
  balance: number;
  currency: string;
  organizationId: number;
};
