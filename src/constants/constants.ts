import styles from '../components/variables.scss';

const baseFontSize = 10;
const rem = (pixels: number): string => `${pixels / baseFontSize}rem`;

export const BREAKPOINT = {
  fifty: '50px',
  oneHun: '100px',
  twoHun: '200px',
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const VIEW_SIZE = {
  full: 100,
  half: 50,
  quarter: 25,
  tenth: 10,
  fiveHundreth: 5,
  hundreth: 1,
  width: 'vw',
  height: 'vh',
};

export const DEMO = {
  widthTrue: '375px',
  widthFalse: '100%',
  heightTrue: '375px',
  heightFalse: '100%',
  marginTrue: '100px',
  marginFalse: '0',
  borderTrue: '1px solid red',
  borderFalse: 'none',
};

export const MIN_DEVICE = {
  mobileS: `(min-width: ${BREAKPOINT.mobileS})`,
  mobileM: `(min-width: ${BREAKPOINT.mobileM})`,
  mobileL: `(min-width: ${BREAKPOINT.mobileL})`,
  tablet: `(min-width: ${BREAKPOINT.tablet})`,
  laptop: `(min-width: ${BREAKPOINT.laptop})`,
  laptopL: `(min-width: ${BREAKPOINT.laptopL})`,
  desktop: `(min-width: ${BREAKPOINT.desktop})`,
} as const;
export const MAX_DEVICE = {
  mobileS: `(max-width: ${BREAKPOINT.mobileS})`,
  mobileM: `(max-width: ${BREAKPOINT.mobileM})`,
  mobileL: `(max-width: ${BREAKPOINT.mobileL})`,
  tablet: `(max-width: ${BREAKPOINT.tablet})`,
  laptop: `(max-width: ${BREAKPOINT.laptop})`,
  laptopL: `(max-width: ${BREAKPOINT.laptopL})`,
  desktop: `(max-width: ${BREAKPOINT.desktop})`,
} as const;

// TODO Update per Brand here
export const COLOR = {
  brandPrimary: '#325573', // blue
  brandSecondary: '#44A68A', // green
  brandTershiary: '#162C40', // dark blue
  brandTextColor: '#72A1A6', // Light Green
  brandBaseColor: '#4B93BF', // blue
  brandDarkColor: '#011019', // Darkest Blue
  brandAccent: '#D0E9F2', // Light Blue
  brandBlack: '#0D0D0D', // black
  black: '#0D131A',
  darkGray: '#636466',
  lightGray: '#DCDDDE',
  softGray: '#F2F2F3',
  offWhite: '#FAFAFA',
  white: '#FFFFFF',
  blue: '#041166',
  blueHover: '#030D4D',
  blueStatus: '#008CFF',
  green: '#166600',
  greenHover: '#114D00',
  greenStatus: '#70C246',
  red: '#660D01',
  redHover: '#4D0A01',
  redStatus: '#70C246',
  orange: '#663D00',
  orangeHover: '#4D2E00',
  orangeStatus: '#FF8800',
  yellow: '#C9B922',
  yellowHover: '#4D4500',
  yellowStatus: '#E0D710',
  overlay: 'rgb(13, 19, 26, .8)',
};

export const COLOR_HALF_OPAC = {
  brandPrimary: '#325573', // blue
  brandSecondary: '#44A68A', // green
  brandTershiary: '#162C40', // dark blue
  brandTextColor: '#72A1A6', // Light Green
  brandBaseColor: '#4B93BF', // blue
  brandDarkColor: '#011019', // Darkest Blue
  brandAccent: '#D0E9F2', // Light Blue
} as const;

export const Z_INDEX = {
  bottomedOut: -1,
  bottom: 0,
  calendar: 1,
  actionList: 2,
  mainHeader: 5,
  dropdownMenu: 2000,
  carousel: 2001,
  mobileMenu: 2002,
  toast: 2003,
} as const;

export const SPACING = {
  xxxs: 1,
  xxs: 4,
  xs: 8,
  sm: 16,
  md: 24,
  lg: 48,
  xl: 96,
} as const;

export const ELEMENT_TYPE = {};

export const FONT_SIZE = {
  s8: rem(8),
  s11: rem(11),
  s13: rem(13),
  s16: rem(16),
  s18: rem(18),
  s24: rem(24),
  s32: rem(32),
  s40: rem(40),
  s64: rem(64),
} as const;

export const LINE_HEIGHT = {
  s8: rem(8),
  s11: rem(11),
  s13: rem(13),
  s16: rem(16),
  s18: rem(18),
  s24: rem(24),
  s32: rem(32),
  s40: rem(40),
  s64: rem(64),
} as const;

export const FONT_WEIGHT = {
  heading: 800,
  bold: 700,
  semi: 600,
  regular: 400,
  light: 200,
} as const;

export const LETTER_SPACING = {
  xxs: rem(0.32),
  xs: rem(0.38),
  sm: rem(0.5),
  md: rem(1.11),
  lg: rem(1.5),
  xl: rem(1.6),
  xxl: rem(2.5),
  xxxl: rem(3.5),
  xxxxl: rem(4.5),
  xxxxxl: rem(5.5),
  xxxxxxl: rem(6.5),
} as const;

export const TRANSITION = {
  duration: 100,
  timingFunction: 'linear',
} as const;

export const SHADOW = {
  dp2: '0 3px 1px -2px rgba(0,0,0,0.20), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12)',
  dp6: '0 3px 5px -1px rgba(0,0,0,0.20), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12)',
  dp12: '0 7px 8px -4px rgba(0,0,0,0.20), 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12)',
  dp24: '0 11px 15px -7px rgba(0,0,0,0.20), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12)',
} as const;

export const MOBILE_HEADER_HEIGHT = 64;

export const MOBILE_HEADER_HEIGHT_INTERNAL = 120;

// ---------------- ^^ Types ^^

export type BREAKPOINT_TYPE = keyof typeof BREAKPOINT;
export type MIN_DEVICE_TYPE = keyof typeof MIN_DEVICE;
export type MAX_DEVICE_TYPE = keyof typeof MAX_DEVICE;
export type COLOR_TYPE = keyof typeof COLOR;
export type COLOR_HALF_OPAC_TYPE = keyof typeof COLOR_HALF_OPAC;
export type Z_INDEX_TYPE = keyof typeof Z_INDEX;
export type SPACING_TYPE = keyof typeof SPACING;
export type FONT_SIZE_TYPE = keyof typeof FONT_SIZE;
export type LINE_HEIGHT_TYPE = keyof typeof LINE_HEIGHT;
export type FONT_WEIGHT_TYPE = keyof typeof FONT_WEIGHT;
export type LETTER_SPACING_TYPE = keyof typeof LETTER_SPACING;
export type TRANSITION_TYPE = keyof typeof TRANSITION;
export type SHADOW_TYPE = keyof typeof SHADOW;
export type MOBILE_HEADER_HEIGHT_TYPE = keyof typeof MOBILE_HEADER_HEIGHT;
export type MOBILE_HEADER_HEIGHT_INTERNAL_TYPE = keyof typeof MOBILE_HEADER_HEIGHT_INTERNAL;

// ---------------- Variants

export const HEADING_VARIANTS = {
  h1: {
    fontSize: FONT_SIZE.s64,
    lineHeight: LINE_HEIGHT.s64,
    letterSpacing: LETTER_SPACING.xl,
    fontWeight: FONT_WEIGHT.heading,
  },
  h2: {
    fontSize: FONT_SIZE.s40,
    lineHeight: LINE_HEIGHT.s40,
    letterSpacing: LETTER_SPACING.md,
    fontWeight: FONT_WEIGHT.heading,
  },
  h3: {
    fontSize: FONT_SIZE.s32,
    lineHeight: LINE_HEIGHT.s32,
    letterSpacing: LETTER_SPACING.sm,
    fontWeight: FONT_WEIGHT.bold,
  },
  h4: {
    fontSize: FONT_SIZE.s24,
    lineHeight: LINE_HEIGHT.s24,
    letterSpacing: LETTER_SPACING.sm,
    fontWeight: FONT_WEIGHT.bold,
  },
  h5: {
    fontSize: FONT_SIZE.s18,
    lineHeight: LINE_HEIGHT.s18,
    letterSpacing: LETTER_SPACING.xs,
    fontWeight: FONT_WEIGHT.bold,
  },
  h6: {
    fontSize: FONT_SIZE.s13,
    lineHeight: LINE_HEIGHT.s13,
    letterSpacing: LETTER_SPACING.xs,
    fontWeight: FONT_WEIGHT.semi,
  },
};

export const TEXT_VARIANTS = {
  span: {
    fontSize: FONT_SIZE.s16,
    lineHeight: LINE_HEIGHT.s16,
    letterSpacing: LETTER_SPACING.md,
    fontWeight: FONT_WEIGHT.regular,
  },
  paragraph: {
    fontSize: FONT_SIZE.s16,
    lineHeight: LINE_HEIGHT.s18,
    letterSpacing: LETTER_SPACING.lg,
    fontWeight: FONT_WEIGHT.regular,
  },
};

export const COLOR_VARIANTS = {
  default: {
    light: COLOR.brandDarkColor,
    dark: COLOR.brandPrimary,
  },
  gray: {
    light: COLOR.softGray,
    dark: COLOR.darkGray,
  },
  selected: {
    light: COLOR.greenHover,
    dark: COLOR.greenHover,
  },
  success: {
    light: COLOR.green,
    dark: COLOR.green,
  },
  error: {
    light: COLOR.red,
    dark: COLOR.red,
  },
  link: {
    light: COLOR.brandTextColor,
    dark: COLOR.brandTextColor,
  },
  disabled: {
    light: COLOR.lightGray,
    dark: COLOR.softGray,
  },
  bright: {
    light: COLOR.lightGray,
    dark: COLOR.offWhite,
  },
};

// ---------------- ^^ Types ^^

export type HEADING_VARIANTS_TYPE = keyof typeof HEADING_VARIANTS;
export type TEXT_VARIANTS_TYPE = keyof typeof TEXT_VARIANTS;
export type COLOR_VARIANTS_TYPE = keyof typeof COLOR_VARIANTS;
