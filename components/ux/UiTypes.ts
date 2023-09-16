import { StaticImageData } from 'next/image';

export type AlertObjType = {
  label: string;
  value: number;
  color: string;
};
export type DropdownItem = {
  value: string | number;
  label: string;
};
// Will you create a json file that has 120 key value pairs where the key is a number and the value is military style names and limit the name to be less than 20 characters? Exclude these from the names: Inc., LLC, Corp, Co, and the like.  I will use this to populate the dropdowns for the billet and rank.
export const AlertObj: AlertObjType[] = [
  {
    label: 'General Alert',
    value: 0,
    color: 'green',
  },
  {
    label: 'Contact Aquired',
    value: 1,
    color: 'yellow',
  },
  {
    label: 'Contact Imminent',
    value: 2,
    color: 'orange',
  },
  {
    label: 'Contact Engaging',
    value: 3,
    color: 'red',
  },
  {
    label: 'Do Not Contact',
    value: 4,
    color: 'black',
  },
];

export type RankImageDetailsType = {
  src: string | StaticImageData;
  width: string;
  height: string;
};

export type RankImageDetailsSizeType = {
  feed: RankImageDetailsType;
  profile: RankImageDetailsType;
  small: RankImageDetailsType;
  medium: RankImageDetailsType;
  large: RankImageDetailsType;
  xSmall: RankImageDetailsType;
  event_card: RankImageDetailsType;
};

export type BilletObjType = {
  label: string;
  value: number;
  abbreviation: string;
  billetType: string;
};

export type FeedItemType = {
  id?: string | number;
  // post_credentials: UserProfile;
  type: FeedItemContentType;
  url: string;
  content: AlertObjType; // Relates to Missions, Events, etc.
  summary?: string;
  size_of_force?: string;
  activity?: string;
  location?: string;
  time_to_contact?: string;
  equipment?: string;
  message: string; // Relates to General Status Updates
  created_at?: string;
  // post_reactions: ReactionType[];
  // post_comments: CommentType[];
  // post_shares: SharesType[];
  archived: boolean;
  deleted: boolean;
  visibility: string;
  // in_group: InGroupObjType[];
  main_org_info: {
    name: string | null;
    rank: string | null;
  };
};

export type MessageContentType = {
  message: string;
  summary: string;
  size_of_force: string;
  activity: string;
  location: string;
  time_to_contact: string;
  equipment: string;
  content: AlertObjType;
};

export type FeedItemContentVisbility = 'public' | 'restricted';
export const FeedItemContentVisbility: DropdownItem[] = [
  { value: 'public', label: 'Public' },
  // { value: 'restricted', label: 'Restricted' },
  { value: 'enlisted', label: 'The Crawlers Club' },
  { value: 'seniorEnlisted', label: 'The Fast Track' },
  { value: 'warrant', label: 'The Stumblers Speakeasy' },
  { value: 'officer', label: 'The Saluter Bees Hideaway' },
  { value: 'admiral', label: 'All the Shiny Things, Bar and Grill' },
  { value: 'invited', label: 'For Honor Galaxy Club' },
];

export type FeedItemContentType = typeof FeedItemContentType;
export const FeedItemContentType: DropdownItem[] = [
  {
    label: 'Status',
    value: 'status',
  },
  // {
  //   label: 'Photo',
  //   value: 'photo',
  // },
  // {
  //   label: 'Video',
  //   value: 'video',
  // },
  // {
  //   label: 'Link',
  //   value: 'link',
  // },
  // {
  //   label: 'Mission Request',
  //   value: 'missionRequest',
  // },
  {
    label: 'Mission SITREP',
    value: 'missionSITREP',
  },
];
// export type SenderObjType = {
//   name: string;
//   id: any;
//   avatar: string;
//   rank: RankObjType;
//   aplhaBillet: BilletObjType;
//   bravoBillet?: BilletObjType;
// };
