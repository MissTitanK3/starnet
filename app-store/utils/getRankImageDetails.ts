// Independent Ranks
import ic from '@/public/starnet_logo.png';

// Enlisted Ranks
import e1 from '@/public/images/enlisted/e1.png';
import e2 from '@/public/images/enlisted/e2.png';
import e3 from '@/public/images/enlisted/e3.png';
import e4 from '@/public/images/enlisted/e4.png';
import e5 from '@/public/images/enlisted/e5.png';
import e6 from '@/public/images/enlisted/e6.png';
import e7 from '@/public/images/enlisted/e7.png';
import e8 from '@/public/images/enlisted/e8.png';
import e9 from '@/public/images/enlisted/e9.png';
import e10 from '@/public/images/enlisted/e10.png';
import e11 from '@/public/images/enlisted/e11.png';
import e12 from '@/public/images/enlisted/e12.png';
import e13 from '@/public/images/enlisted/e13.png';
// Warrant Officer Ranks
import w1 from '@/public/images/warrant-officer/wo.png';
import w2 from '@/public/images/warrant-officer/w1.png';
import w3 from '@/public/images/warrant-officer/w2.png';
import w4 from '@/public/images/warrant-officer/w3.png';
import w5 from '@/public/images/warrant-officer/w4.png';
import w6 from '@/public/images/warrant-officer/w5.png';

// Officer Ranks
import o1 from '@/public/images/officer/o1.png';
import o2 from '@/public/images/officer/o2.png';
import o3 from '@/public/images/officer/o3.png';
import o4 from '@/public/images/officer/o4.png';
import o5 from '@/public/images/officer/o5.png';
import o6 from '@/public/images/officer/o6.png';

// Admiral Ranks
import a1 from '@/public/images/command-officer/a1.png';
import a2 from '@/public/images/command-officer/a2.png';
import a3 from '@/public/images/command-officer/a3.png';
import a4 from '@/public/images/command-officer/a4.png';
import a5 from '@/public/images/command-officer/a5.png';
import { RankImageDetailsSizeType, RankImageDetailsType } from '@/components/ux/UiTypes';

export const getVariableRankImageDetails = (creatorRankGrade: string): RankImageDetailsSizeType | undefined => {
  switch (creatorRankGrade) {
    case 'IC':
      return {
        feed: {
          src: ic,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: ic,
          width: '20%',
          height: '100%',
        },
        small: {
          src: ic,
          width: '60px',
          height: '60px',
        },
        medium: {
          src: ic,
          width: '30%',
          height: '100%',
        },
        large: {
          src: ic,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: ic,
          width: '25px',
          height: '22px',
        },
        event_card: {
          src: ic,
          width: '25px',
          height: '22px',
        },
      };
    case 'E1':
      return {
        feed: {
          src: e1,
          width: '30%',
          height: '10%',
        },
        profile: {
          src: e1,
          width: '35%',
          height: '100%',
        },
        small: {
          src: e1,
          width: '45px',
          height: '25px',
        },
        medium: {
          src: e1,
          width: '30%',
          height: '10%',
        },
        large: {
          src: e1,
          width: '30%',
          height: '10%',
        },
        xSmall: {
          src: e1,
          width: '25px',
          height: '12px',
        },
        event_card: {
          src: e1,
          width: '25px',
          height: '12px',
        },
      };
    case 'E2':
      return {
        feed: {
          src: e2,
          width: '25%',
          height: '20%',
        },
        profile: {
          src: e2,
          width: '35%',
          height: '100%',
        },
        small: {
          src: e2,
          width: '45px',
          height: '25px',
        },
        medium: {
          src: e2,
          width: '25%',
          height: '20%',
        },
        large: {
          src: e2,
          width: '25%',
          height: '20%',
        },
        xSmall: {
          src: e2,
          width: '25px',
          height: '13px',
        },
        event_card: {
          src: e2,
          width: '40px',
          height: '20px',
        },
      };
    case 'E3':
      return {
        feed: {
          src: e3,
          width: '30%',
          height: '20%',
        },
        profile: {
          src: e3,
          width: '35%',
          height: '20%',
        },
        small: {
          src: e3,
          width: '45px',
          height: '25px',
        },
        medium: {
          src: e3,
          width: '30%',
          height: '20%',
        },
        large: {
          src: e3,
          width: '30%',
          height: '20%',
        },
        xSmall: {
          src: e3,
          width: '25px',
          height: '13px',
        },
        event_card: {
          src: e3,
          width: '40px',
          height: '20px',
        },
      };
    case 'E4':
      return {
        feed: {
          src: e4,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: e4,
          width: '35%',
          height: '100%',
        },
        small: {
          src: e4,
          width: '45px',
          height: '25px',
        },
        medium: {
          src: e4,
          width: '30%',
          height: '100%',
        },
        large: {
          src: e4,
          width: '30%',

          height: '100%',
        },
        xSmall: {
          src: e4,
          width: '25px',
          height: '13px',
        },
        event_card: {
          src: e4,
          width: '40px',
          height: '20px',
        },
      };
    case 'E5':
      return {
        feed: {
          src: e5,
          width: '25%',
          height: '100%',
        },
        profile: {
          src: e5,
          width: '20%',
          height: '100%',
        },
        small: {
          src: e5,
          width: '45px',
          height: '45px',
        },
        medium: {
          src: e5,
          width: '25%',
          height: '100%',
        },
        large: {
          src: e5,
          width: '25%',
          height: '100%',
        },
        xSmall: {
          src: e5,
          width: '25px',
          height: '25px',
        },
        event_card: {
          src: e5,
          width: '35px',
          height: '40px',
        },
      };
    case 'E6':
      return {
        feed: {
          src: e6,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: e6,
          width: '25%',
          height: '100%',
        },
        small: {
          src: e6,
          width: '45px',
          height: '50px',
        },
        medium: {
          src: e6,
          width: '30%',
          height: '100%',
        },
        large: {
          src: e6,

          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: e6,
          width: '25px',
          height: '25px',
        },
        event_card: {
          src: e6,
          width: '35px',
          height: '40px',
        },
      };
    case 'E7':
      return {
        feed: {
          src: e7,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: e7,
          width: '15%',
          height: '100%',
        },
        small: {
          src: e7,
          width: '45px',
          height: '55px',
        },
        medium: {
          src: e7,
          width: '30%',
          height: '100%',
        },
        large: {
          src: e7,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: e7,
          width: '25px',
          height: '25px',
        },
        event_card: {
          src: e7,
          width: '35px',
          height: '40px',
        },
      };
    case 'E8':
      return {
        feed: {
          src: e8,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: e8,
          width: '13%',
          height: '100%',
        },
        small: {
          src: e8,
          width: '45px',
          height: '60px',
        },
        medium: {
          src: e8,
          width: '30%',
          height: '100%',
        },
        large: {
          src: e8,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: e8,
          width: '20px',
          height: '25px',
        },
        event_card: {
          src: e8,
          width: '30px',
          height: '45px',
        },
      };
    case 'E9':
      return {
        feed: {
          src: e9,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: e9,
          width: '15%',
          height: '100%',
        },
        small: {
          src: e9,
          width: '45px',
          height: '55px',
        },
        medium: {
          src: e9,
          width: '30%',
          height: '100%',
        },
        large: {
          src: e9,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: e9,
          width: '25px',
          height: '25px',
        },
        event_card: {
          src: e9,
          width: '34px',
          height: '45px',
        },
      };
    case 'E10':
      return {
        feed: {
          src: e10,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: e10,
          width: '13%',
          height: '100%',
        },
        small: {
          src: e10,
          width: '45px',
          height: '60px',
        },
        medium: {
          src: e10,
          width: '30%',
          height: '100%',
        },
        large: {
          src: e10,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: e10,
          width: '20px',
          height: '25px',
        },
        event_card: {
          src: e10,
          width: '30px',
          height: '45px',
        },
      };
    case 'E11':
      return {
        feed: {
          src: e11,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: e11,
          width: '15%',
          height: '100%',
        },
        small: {
          src: e11,
          width: '45px',
          height: '55px',
        },
        medium: {
          src: e11,
          width: '30%',
          height: '100%',
        },
        large: {
          src: e11,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: e11,
          width: '25px',
          height: '25px',
        },
        event_card: {
          src: e11,
          width: '34px',
          height: '45px',
        },
      };
    case 'E12':
      return {
        feed: {
          src: e12,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: e12,
          width: '13%',
          height: '100%',
        },
        small: {
          src: e12,
          width: '45px',
          height: '60px',
        },
        medium: {
          src: e12,
          width: '30%',
          height: '100%',
        },
        large: {
          src: e12,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: e12,
          width: '20px',
          height: '25px',
        },
        event_card: {
          src: e12,
          width: '34px',
          height: '45px',
        },
      };
    case 'E13':
      return {
        feed: {
          src: e13,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: e13,
          width: '20%',
          height: '100%',
        },
        small: {
          src: e13,
          width: '60px',
          height: '60px',
        },
        medium: {
          src: e13,
          width: '30%',
          height: '100%',
        },
        large: {
          src: e13,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: e13,
          width: '25px',
          height: '22px',
        },
        event_card: {
          src: e13,
          width: '25px',
          height: '22px',
        },
      };
    case 'W1':
      return {
        feed: {
          src: w1,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: w1,
          width: '20%',
          height: '100%',
        },
        small: {
          src: w1,
          width: '60px',
          height: '25px',
        },
        medium: {
          src: w1,
          width: '30%',
          height: '100%',
        },
        large: {
          src: w1,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: w1,
          width: '25px',
          height: '11px',
        },
        event_card: {
          src: w1,
          width: '25px',
          height: '11px',
        },
      };
    case 'W2':
      return {
        feed: {
          src: w2,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: w2,
          width: '20%',
          height: '100%',
        },
        small: {
          src: w2,
          width: '60px',
          height: '25px',
        },
        medium: {
          src: w2,
          width: '30%',
          height: '100%',
        },
        large: {
          src: w2,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: w2,
          width: '25px',
          height: '11px',
        },
        event_card: {
          src: w2,
          width: '25px',
          height: '11px',
        },
      };
    case 'W3':
      return {
        feed: {
          src: w3,
          width: '20%',
          height: '100%',
        },
        profile: {
          src: w3,
          width: '30%',
          height: '100%',
        },
        small: {
          src: w3,
          width: '60px',
          height: '25px',
        },
        medium: {
          src: w3,
          width: '30%',
          height: '100%',
        },
        large: {
          src: w3,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: w3,
          width: '25px',
          height: '11px',
        },
        event_card: {
          src: w3,
          width: '25px',
          height: '11px',
        },
      };
    case 'W4':
      return {
        feed: {
          src: w4,
          width: '20%',
          height: '100%',
        },
        profile: {
          src: w4,
          width: '30%',
          height: '100%',
        },
        small: {
          src: w4,
          width: '60px',
          height: '25px',
        },
        medium: {
          src: w4,
          width: '30%',
          height: '100%',
        },
        large: {
          src: w4,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: w4,
          width: '25px',
          height: '11px',
        },
        event_card: {
          src: w4,
          width: '25px',
          height: '11px',
        },
      };
    case 'W5':
      return {
        feed: {
          src: w5,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: w5,
          width: '20%',
          height: '100%',
        },
        small: {
          src: w5,
          width: '60px',
          height: '25px',
        },
        medium: {
          src: w5,
          width: '30%',
          height: '100%',
        },
        large: {
          src: w5,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: w5,
          width: '25px',
          height: '11px',
        },
        event_card: {
          src: w5,
          width: '25px',
          height: '11px',
        },
      };
    case 'W6':
      return {
        feed: {
          src: w6,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: w6,
          width: '20%',
          height: '100%',
        },
        small: {
          src: w6,
          width: '60px',
          height: '25px',
        },
        medium: {
          src: w6,
          width: '30%',
          height: '100%',
        },
        large: {
          src: w6,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: w6,
          width: '25px',
          height: '11px',
        },
        event_card: {
          src: w6,
          width: '25px',
          height: '11px',
        },
      };
    case 'O1':
      return {
        feed: {
          src: o1,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: o1,
          width: '20%',
          height: '100%',
        },
        small: {
          src: o1,
          width: '20px',
          height: '60px',
        },
        medium: {
          src: o1,
          width: '30%',
          height: '100%',
        },
        large: {
          src: o1,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: o1,
          width: '25px',
          height: '11px',
        },
        event_card: {
          src: o1,
          width: '25px',
          height: '11px',
        },
      };
    case 'O2':
      return {
        feed: {
          src: o2,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: o2,
          width: '20%',
          height: '100%',
        },
        small: {
          src: o2,
          width: '20px',
          height: '60px',
        },
        medium: {
          src: o2,
          width: '30%',
          height: '100%',
        },
        large: {
          src: o2,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: o2,
          width: '25px',
          height: '11px',
        },
        event_card: {
          src: o2,
          width: '25px',
          height: '11px',
        },
      };
    case 'O3':
      return {
        feed: {
          src: o3,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: o3,
          width: '15%',
          height: '100%',
        },
        small: {
          src: o3,
          width: '50px',
          height: '50px',
        },
        medium: {
          src: o3,
          width: '30%',
          height: '100%',
        },
        large: {
          src: o3,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: o3,
          width: '25px',
          height: '22px',
        },
        event_card: {
          src: o3,
          width: '25px',
          height: '22px',
        },
      };
    case 'O4':
      return {
        feed: {
          src: o4,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: o4,
          width: '15%',
          height: '100%',
        },
        small: {
          src: o4,
          width: '50px',
          height: '50px',
        },
        medium: {
          src: o4,
          width: '30%',
          height: '100%',
        },
        large: {
          src: o4,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: o4,
          width: '25px',
          height: '25px',
        },
        event_card: {
          src: o4,
          width: '25px',
          height: '25px',
        },
      };
    case 'O5':
      return {
        feed: {
          src: o5,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: o5,
          width: '15%',
          height: '100%',
        },
        small: {
          src: o5,
          width: '50px',
          height: '50px',
        },
        medium: {
          src: o5,
          width: '30%',
          height: '100%',
        },
        large: {
          src: o5,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: o5,
          width: '25px',
          height: '25px',
        },
        event_card: {
          src: o5,
          width: '25px',
          height: '25px',
        },
      };
    case 'O6':
      return {
        feed: {
          src: o6,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: o6,
          width: '20%',
          height: '100%',
        },
        small: {
          src: o6,
          width: '60px',
          height: '30px',
        },
        medium: {
          src: o6,
          width: '30%',
          height: '100%',
        },
        large: {
          src: o6,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: o6,
          width: '25px',
          height: '13px',
        },
        event_card: {
          src: o6,
          width: '35px',
          height: '17px',
        },
      };
    case 'A1':
      return {
        feed: {
          src: a1,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: a1,
          width: '20%',
          height: '100%',
        },
        small: {
          src: a1,
          width: '80px',
          height: '50px',
        },
        medium: {
          src: a1,
          width: '30%',
          height: '100%',
        },
        large: {
          src: a1,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: a1,
          width: '25px',
          height: '13px',
        },
        event_card: {
          src: a1,
          width: '36px',
          height: '29px',
        },
      };
    case 'A2':
      return {
        feed: {
          src: a2,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: a2,
          width: '20%',
          height: '100%',
        },
        small: {
          src: a2,
          width: '80px',
          height: '50px',
        },
        medium: {
          src: a2,
          width: '30%',
          height: '100%',
        },
        large: {
          src: a2,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: a2,
          width: '25px',
          height: '13px',
        },
        event_card: {
          src: a2,
          width: '33px',
          height: '18px',
        },
      };
    case 'A3':
      return {
        feed: {
          src: a3,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: a3,
          width: '15%',
          height: '100%',
        },
        small: {
          src: a3,
          width: '80px',
          height: '60px',
        },
        medium: {
          src: a3,
          width: '30%',
          height: '100%',
        },
        large: {
          src: a3,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: a3,
          width: '25px',
          height: '25px',
        },
        event_card: {
          src: a3,
          width: '30px',
          height: '33px',
        },
      };
    case 'A4':
      return {
        feed: {
          src: a4,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: a4,
          width: '15%',
          height: '100%',
        },
        small: {
          src: a4,
          width: '60px',
          height: '60px',
        },
        medium: {
          src: a4,
          width: '30%',
          height: '100%',
        },
        large: {
          src: a4,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: a4,
          width: '25px',
          height: '25px',
        },
        event_card: {
          src: a4,
          width: '30px',
          height: '30px',
        },
      };
    case 'A5':
      return {
        feed: {
          src: a5,
          width: '30%',
          height: '100%',
        },
        profile: {
          src: a5,
          width: '13%',
          height: '100%',
        },
        small: {
          src: a5,
          width: '60px',
          height: '60px',
        },
        medium: {
          src: a5,
          width: '30%',
          height: '100%',
        },
        large: {
          src: a5,
          width: '30%',
          height: '100%',
        },
        xSmall: {
          src: a5,
          width: '25px',
          height: '25px',
        },
        event_card: {
          src: a5,
          width: '30px',
          height: '30px',
        },
      };
    default:
      return;
  }
};

export const getRankImageDetails = (creatorRankGrade: string): RankImageDetailsType | undefined => {
  switch (creatorRankGrade) {
    case 'E1':
      return {
        src: e1,
        width: '30%',
        height: '10%',
      };
    case 'E2':
      return {
        src: e2,
        width: '25%',
        height: '20%',
      };
    case 'E3':
      return {
        src: e3,
        width: '30%',
        height: '20%',
      };
    case 'E4':
      return {
        src: e4,
        width: '30%',
        height: '100%',
      };
    case 'E5':
      return {
        src: e5,
        width: '25%',
        height: '100%',
      };
    case 'E6':
      return {
        src: e6,
        width: '25%',
        height: '100%',
      };
    case 'E7':
      return {
        src: e7,
        width: '18%',
        height: '100%',
      };
    case 'E8':
      return {
        src: e8,
        width: '15%',
        height: '100%',
      };
    case 'E9':
      return {
        src: e9,
        width: '18%',
        height: '100%',
      };
    case 'E10':
      return {
        src: e10,
        width: '15%',
        height: '100%',
      };
    case 'E11':
      return {
        src: e11,
        width: '18%',
        height: '100%',
      };
    case 'E12':
      return {
        src: e12,
        width: '15%',
        height: '100%',
      };
    case 'E13':
      return {
        src: e13,
        width: '20%',
        height: '10%',
      };
    case 'W1':
      return {
        src: w1,
        width: '30%',
        height: '10%',
      };
    case 'W2':
      return {
        src: w2,
        width: '30%',
        height: '10%',
      };
    case 'W3':
      return {
        src: w3,
        width: '30%',
        height: '10%',
      };
    case 'W4':
      return {
        src: w4,
        width: '30%',
        height: '10%',
      };
    case 'W5':
      return {
        src: w5,
        width: '30%',
        height: '10%',
      };
    case 'O1':
      return {
        src: o1,
        width: '30%',
        height: '10%',
      };
    case 'O2':
      return {
        src: o2,
        width: '30%',
        height: '10%',
      };
    case 'O3':
      return {
        src: o3,
        width: '30%',
        height: '10%',
      };
    case 'O4':
      return {
        src: o4,
        width: '20%',
        height: '10%',
      };
    case 'O5':
      return {
        src: o5,
        width: '20%',
        height: '10%',
      };
    case 'O6':
      return {
        src: o6,
        width: '25%',
        height: '10%',
      };
    case 'A1':
      return {
        src: a1,
        width: '20%',
        height: '10%',
      };
    case 'A2':
      return {
        src: a2,
        width: '15%',
        height: '65%',
      };
    case 'A3':
      return {
        src: a3,
        width: '15%',
        height: '100%',
      };
    case 'A4':
      return {
        src: a4,
        width: '15%',
        height: '10%',
      };
    case 'A5':
      return {
        src: a5,
        width: '12%',
        height: '10%',
      };
    default:
      return;
  }
};
