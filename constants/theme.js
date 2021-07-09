import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // accent
  green: '#5AB091',
  darkGreen: '#229879',
  gray: '#777777',
  gray100: '#E0E0E0',
  gray200: '#ABABAB',
  gray400: '#ABABAB',
  gray900: '#292929',

  // primary
  white: '#FFFFFF',
  white200: 'F9F9F9',
  black: '#020202',

  // transparent blacks
  transparentBlack1: 'rgba(2, 2, 2, 0.1)',
  transparentBlack3: 'rgba(2, 2, 2, 0.3)',
  transparentBlack5: 'rgba(2, 2, 2, 0.5)',
  transparentBlack7: 'rgba(2, 2, 2, 0.7)',
  transparentBlack9: 'rgba(2, 2, 2, 0.9)',

  //transparent grays
  transparentGray: 'rgba(77,77,77, 0.8)',
  transparentDarkGray: 'rgba(20,20,20, 0.9)',

  // transparent
  transparent: 'transparent',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle},

  // headings
  h1: {fontFamily: 'Poppins-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h4, lineHeight: 22},

  // subheadings
  semiH1: {fontFamily: 'Poppins-Semibold', fontSize: SIZES.h1, lineHeight: 36},
  semiH2: {fontFamily: 'Poppins-Semibold', fontSize: SIZES.h2, lineHeight: 30},
  semiH3: {fontFamily: 'Poppins-Semibold', fontSize: SIZES.h3, lineHeight: 22},
  semiH4: {fontFamily: 'Poppins-Semibold', fontSize: SIZES.h4, lineHeight: 22},

  // body
  body1: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
