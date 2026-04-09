import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

// ─── Custom spacing scale (Olympus uses a non-linear 4px-base scale) ────────
// Index:  0    1    2    3     4     5     6     7     8     9     10
// Value:  0    4    8    16    24    32    40    48    64    96    128
const SPACING_MAP = [0, 4, 8, 16, 24, 32, 40, 48, 64, 96, 128];

const spacingFn = (factor: number): string => {
  const value = SPACING_MAP[factor] ?? factor * 8;
  return `${value}px`;
};

// ─── Shadows ────────────────────────────────────────────────────────────────
const buildShadows = (): ThemeOptions['shadows'] => {
  const none = 'none';
  const s1 = '0px 1px 3px rgba(0,0,0,0.06), 0px 1px 1px rgba(0,0,0,0.07), 0px 2px 1px -1px rgba(0,0,0,0.10)';
  const s2 = '0px 1px 5px rgba(0,0,0,0.06), 0px 2px 2px rgba(0,0,0,0.07), 0px 3px 1px -2px rgba(0,0,0,0.10)';
  const s3 = s2; // 3 not specified, fall back to 2
  const s4 = '0px 1px 10px rgba(0,0,0,0.06), 0px 4px 5px rgba(0,0,0,0.07), 0px 2px 4px -1px rgba(0,0,0,0.10)';
  const s8 = '0px 3px 14px 2px rgba(0,0,0,0.06), 0px 8px 10px 1px rgba(0,0,0,0.07), 0px 5px 5px -3px rgba(0,0,0,0.10)';
  const s16 = '0px 6px 30px 5px rgba(0,0,0,0.06), 0px 16px 24px 2px rgba(0,0,0,0.07), 0px 8px 10px -5px rgba(0,0,0,0.10)';
  const s24 = '0px 9px 46px 8px rgba(0,0,0,0.06), 0px 24px 38px 3px rgba(0,0,0,0.07), 0px 11px 15px -7px rgba(0,0,0,0.10)';

  // MUI expects exactly 25 shadow entries [0..24]
  return [
    none, s1, s2, s3, s4, // 0-4
    s4, s4, s4, s8, s8,   // 5-9
    s8, s8, s8, s8, s8,   // 10-14
    s16, s16, s16, s16, s16, // 15-19
    s16, s16, s16, s16, s24, // 20-24
  ] as ThemeOptions['shadows'];
};

// ─── Shared typography definitions ──────────────────────────────────────────
const fontFamily = '"Inter", sans-serif';

const sharedTypography = {
  fontFamily,
  h1: { fontSize: '32px', fontWeight: 600, lineHeight: 1.167, letterSpacing: '-0.4px' },
  h2: { fontSize: '28px', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.4px' },
  h3: { fontSize: '24px', fontWeight: 600, lineHeight: 1.167, letterSpacing: '-0.4px' },
  h4: { fontSize: '20px', fontWeight: 600, lineHeight: 1.235, letterSpacing: '-0.4px' },
  h5: { fontSize: '18px', fontWeight: 600, lineHeight: 1.334, letterSpacing: '-0.4px' },
  h6: { fontSize: '18px', fontWeight: 600, lineHeight: 1.334, letterSpacing: '-0.4px' },
  subtitle1: { fontSize: '16px', fontWeight: 500, lineHeight: 1.75, letterSpacing: '-0.4px' },
  subtitle2: { fontSize: '14px', fontWeight: 500, lineHeight: 1.57, letterSpacing: '-0.4px' },
  body1: { fontSize: '16px', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0px' },
  body2: { fontSize: '14px', fontWeight: 400, lineHeight: 1.43, letterSpacing: '0px' },
  caption: { fontSize: '12px', fontWeight: 400, lineHeight: 1.66, letterSpacing: '0.4px' },
  overline: { fontSize: '10px', fontWeight: 600, lineHeight: 1.66, letterSpacing: '1.25px', textTransform: 'uppercase' as const },
  button: { fontSize: '14px', fontWeight: 500, lineHeight: 1.43, letterSpacing: '0.4px', textTransform: 'uppercase' as const },
  // Component typography
  buttonLarge: { fontSize: '16px', fontWeight: 500, lineHeight: 1.5, letterSpacing: '0.46px', textTransform: 'uppercase' as const },
  buttonMedium: { fontSize: '14px', fontWeight: 500, lineHeight: 1.43, letterSpacing: '0.4px', textTransform: 'uppercase' as const },
  buttonSmall: { fontSize: '12px', fontWeight: 500, lineHeight: 1.66, letterSpacing: '0.46px', textTransform: 'uppercase' as const },
  alertTitle: { fontSize: '16px', fontWeight: 500, lineHeight: 1.5, letterSpacing: '0.15px' },
  inputLabel: { fontSize: '12px', fontWeight: 400, lineHeight: 1, letterSpacing: '0.15px' },
  inputText: { fontSize: '16px', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.15px' },
  helperText: { fontSize: '12px', fontWeight: 400, lineHeight: 1.66, letterSpacing: '0.4px' },
  chip: { fontSize: '12px', fontWeight: 500, lineHeight: 1.66, letterSpacing: '0.16px' },
  tooltip: { fontSize: '10px', fontWeight: 500, lineHeight: 1.4, letterSpacing: '0px' },
  tableHeader: { fontSize: '14px', fontWeight: 500, lineHeight: 1.71, letterSpacing: '0.17px' },
  badgeLabel: { fontSize: '12px', fontWeight: 500, lineHeight: 1.66, letterSpacing: '0.14px' },
  avatarInitials: { fontSize: '20px', fontWeight: 400, lineHeight: 1, letterSpacing: '0.14px' },
  menuItem: { fontSize: '16px', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.15px' },
  menuItemDense: { fontSize: '14px', fontWeight: 400, lineHeight: 1.71, letterSpacing: '0.17px' },
  listSubheader: { fontSize: '14px', fontWeight: 500, lineHeight: 3.43, letterSpacing: '0.1px' },
  bottomNavActiveLabel: { fontSize: '14px', fontWeight: 400, lineHeight: 1.71, letterSpacing: '0.4px' },
};

// ─── Grey palette (shared) ──────────────────────────────────────────────────
const grey = {
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#EEEEEE',
  300: '#E0E0E0',
  400: '#BDBDBD',
  500: '#9E9E9E',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#F5F5F5',
  A200: '#EEEEEE',
  A400: '#BDBDBD',
  A700: '#616161',
};

// ─── Extended material palettes ─────────────────────────────────────────────
const extended = {
  red: { 50: '#FEEBEE', 100: '#FECDD2', 200: '#EF9A9A', 300: '#E57373', 400: '#EF5350', 500: '#F44336', 600: '#E53935', 700: '#D32F2F', 800: '#C62828', 900: '#B71C1C', A100: '#FF8A80', A200: '#FF5252', A400: '#FF1744', A700: '#D50000' },
  pink: { 50: '#FCE4EC', 100: '#F8BBD0', 200: '#F48FB1', 300: '#F06292', 400: '#EC407A', 500: '#E91E63', 600: '#D81B60', 700: '#C2185B', 800: '#AD1457', 900: '#880E4F', A100: '#F50057', A200: '#FF4081', A400: '#F50057', A700: '#C51162' },
  purple: { 50: '#F3E5F5', 100: '#E1BEE7', 200: '#CE93D8', 300: '#BA68C8', 400: '#AB47BC', 500: '#9C27B0', 600: '#8E24AA', 700: '#7B1FA2', 800: '#6A1B9A', 900: '#4A148C', A100: '#EA80FC', A200: '#E040FB', A400: '#D500F9', A700: '#AA00FF' },
  deepPurple: { 50: '#EDE7F6', 100: '#D1C4E9', 200: '#B39DDB', 300: '#9575CD', 400: '#7E57C2', 500: '#673AB7', 600: '#5E35B1', 700: '#512DA8', 800: '#4527A0', 900: '#311B92', A100: '#B388FF', A200: '#7C4DFF', A400: '#651FFF', A700: '#6200EA' },
  indigo: { 50: '#E8EAF6', 100: '#C5CAE9', 200: '#9FA8DA', 300: '#7986CB', 400: '#5C6BC0', 500: '#3F51B5', 600: '#3949AB', 700: '#303F9F', 800: '#283593', 900: '#1A237E', A100: '#8C9EFF', A200: '#536DFE', A400: '#3D5AFE', A700: '#304FFE' },
  blue: { 50: '#E3F2FD', 100: '#BBDEFB', 200: '#90CAF9', 300: '#64B5F6', 400: '#42A5F5', 500: '#2196F3', 600: '#1E88E5', 700: '#1976D2', 800: '#1565C0', 900: '#0D47A1', A100: '#82B1FF', A200: '#448AFF', A400: '#2979FF', A700: '#2962FF' },
  lightBlue: { 50: '#E1F5FE', 100: '#B3E5FC', 200: '#81D4FA', 300: '#4FC3F7', 400: '#29B6F6', 500: '#03A9F4', 600: '#039BE5', 700: '#0288D1', 800: '#0277BD', 900: '#01579B', A100: '#80D8FF', A200: '#40C4FF', A400: '#00B0FF', A700: '#0091EA' },
  cyan: { 50: '#E0F7FA', 100: '#B2EBF2', 200: '#80DEEA', 300: '#4DD0E1', 400: '#26C6DA', 500: '#00BCD4', 600: '#00ACC1', 700: '#0097A7', 800: '#00838F', 900: '#006064', A100: '#84FFFF', A200: '#18FFFF', A400: '#00E5FF', A700: '#00B8D4' },
  teal: { 50: '#E0F2F1', 100: '#B2DFDB', 200: '#80CBC4', 300: '#4DB6AC', 400: '#26A69A', 500: '#009688', 600: '#00897B', 700: '#00796B', 800: '#00695C', 900: '#004D40', A100: '#A7FFEB', A200: '#64FFDA', A400: '#1DE9B6', A700: '#00BFA5' },
  green: { 50: '#E8F5E9', 100: '#C8E6C9', 200: '#A5D6A7', 300: '#81C784', 400: '#66BB6A', 500: '#4CAF50', 600: '#43A047', 700: '#388E3C', 800: '#2E7D32', 900: '#1B5E20', A100: '#B9F6CA', A200: '#69F0AE', A400: '#00E676', A700: '#00C853' },
  lightGreen: { 50: '#F1F8E9', 100: '#DCEDC8', 200: '#C5E1A5', 300: '#AED581', 400: '#8BC34A', 500: '#8BC34A', 600: '#7CB342', 700: '#689F38', 800: '#558B2F', 900: '#33691E', A100: '#CCFF90', A200: '#B2FF59', A400: '#76FF03', A700: '#64DD17' },
  lime: { 50: '#F9FBE7', 100: '#F0F4C3', 200: '#E6EE9C', 300: '#DCE775', 400: '#D4E157', 500: '#CDDC39', 600: '#C0CA33', 700: '#AFB42B', 800: '#9E9D24', 900: '#827717', A100: '#F4FF81', A200: '#EEFF41', A400: '#C6FF00', A700: '#AEEA00' },
  yellow: { 50: '#FFFDE7', 100: '#FFF9C4', 200: '#FFF59D', 300: '#FFF176', 400: '#FFEE58', 500: '#FFEB3B', 600: '#FDD835', 700: '#FBC02D', 800: '#F9A825', 900: '#F57F17', A100: '#FFFF8D', A200: '#FFFF00', A400: '#FFEA00', A700: '#FFD600' },
  amber: { 50: '#FFF8E1', 100: '#FFECB3', 200: '#FFE082', 300: '#FFD54F', 400: '#FFCA28', 500: '#FFC107', 600: '#FFB300', 700: '#FFA000', 800: '#FF8F00', 900: '#FF6F00', A100: '#FFE57F', A200: '#FFD740', A400: '#FFC400', A700: '#FFAB00' },
  orange: { 50: '#FFF3E0', 100: '#FFE0B2', 200: '#FFCC80', 300: '#FFB74D', 400: '#FFA726', 500: '#FF9800', 600: '#FB8C00', 700: '#F57C00', 800: '#EF6C00', 900: '#E65100', A100: '#FFD180', A200: '#FFAB40', A400: '#FF9100', A700: '#FF6D00' },
  deepOrange: { 50: '#FBE9E7', 100: '#FFCCBC', 200: '#FFAB91', 300: '#FF8A65', 400: '#FF7043', 500: '#FF5722', 600: '#F4511E', 700: '#E64A19', 800: '#D84315', 900: '#BF360C', A100: '#FF9E80', A200: '#FF6E40', A400: '#FF3D00', A700: '#DD2C00' },
  blueGrey: { 50: '#ECEFF1', 100: '#CFD8DC', 200: '#B0BEC5', 300: '#90A4AE', 400: '#78909C', 500: '#607D8B', 600: '#546E7A', 700: '#455A64', 800: '#37474F', 900: '#263238', A100: '#CFD8DC', A200: '#B0BEC5', A400: '#78909C', A700: '#455A64' },
};

// ─── Shared component overrides ─────────────────────────────────────────────
const sharedComponents: ThemeOptions['components'] = {
  MuiCssBaseline: {
    styleOverrides: {
      body: { fontFamily },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: { borderRadius: 4, textTransform: 'uppercase' as const },
    },
    defaultProps: {
      disableElevation: true,
    },
  },
  MuiCard: {
    defaultProps: { elevation: 1 },
    styleOverrides: { root: { borderRadius: 4 } },
  },
  MuiChip: {
    styleOverrides: { root: { borderRadius: 9999 } },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: { fontSize: '10px', fontWeight: 500, lineHeight: 1.4 },
    },
  },
  MuiDialog: {
    defaultProps: { slotProps: { paper: { elevation: 24 } } },
  },
  MuiDrawer: {
    defaultProps: { slotProps: { paper: { elevation: 16 } } },
  },
  MuiPaper: {
    styleOverrides: { rounded: { borderRadius: 4 } },
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// LIGHT THEME
// ═══════════════════════════════════════════════════════════════════════════════
const lightPalette = {
  mode: 'light' as const,
  primary: {
    main: '#196AE5',
    dark: '#0F4089',
    light: '#4788EA',
    contrastText: '#FFFFFF',
    shades: {
      hover: 'rgba(25,106,229,0.04)',
      select: 'rgba(25,106,229,0.08)',
      '12p': 'rgba(25,106,229,0.12)',
      '30p': 'rgba(25,106,229,0.30)',
      '50p': 'rgba(25,106,229,0.50)',
    },
  },
  error: {
    main: '#FF3333',
    dark: '#D10B25',
    light: '#F9494F',
    contrastText: '#FFFFFF',
    shades: { '160p': '#7A2828', '190p': '#FFEBEB' },
  },
  warning: {
    main: '#FF9800',
    dark: '#EF6C00',
    light: '#FFB74D',
    contrastText: '#FFFFFF',
    shades: { '160p': '#7A5114', '190p': '#FFF5E5' },
  },
  success: {
    main: '#22BB34',
    dark: '#00880F',
    light: '#74D176',
    contrastText: '#FFFFFF',
    shades: { '160p': '#215F29', '190p': '#E9F8EB' },
  },
  info: {
    main: '#196AE5',
    dark: '#0F4089',
    light: '#4788EA',
    contrastText: '#FFFFFF',
    shades: { '160p': '#1E3E6F', '190p': '#E8F0FC' },
  },
  text: {
    primary: 'rgba(33,33,33,0.92)',
    secondary: 'rgba(33,33,33,0.72)',
    disabled: 'rgba(33,33,33,0.24)',
  },
  action: {
    active: 'rgba(33,33,33,0.64)',
    hover: 'rgba(33,33,33,0.04)',
    selected: 'rgba(33,33,33,0.08)',
    disabled: 'rgba(33,33,33,0.30)',
    disabledBackground: 'rgba(33,33,33,0.12)',
    focus: 'rgba(33,33,33,0.12)',
  },
  background: {
    default: '#FAFAFA',
    paper: '#FFFFFF',
  },
  divider: 'rgba(33,33,33,0.06)',
  common: { white: '#FFFFFF', black: '#000000' },
  grey,
  other: {
    divider: 'rgba(33,33,33,0.06)',
    outlinedBorder: 'rgba(33,33,33,0.23)',
    backdropOverlay: 'rgba(33,33,33,0.50)',
    filledInputBackground: 'rgba(33,33,33,0.06)',
    standardInputLine: 'rgba(33,33,33,0.42)',
    snackbar: '#212121',
    ratingActive: '#FFB400',
  },
  brand: {
    bright: '#1974D2',
    darker: '#0E39A9',
  },
  extended,
};

// ═══════════════════════════════════════════════════════════════════════════════
// DARK THEME
// ═══════════════════════════════════════════════════════════════════════════════
const darkPalette = {
  mode: 'dark' as const,
  primary: {
    main: '#66BBFF',
    dark: '#3A9AE8',
    light: '#E8F0FC',
    contrastText: 'rgba(0,0,0,0.87)',
    shades: {
      hover: 'rgba(102,187,255,0.08)',
      select: 'rgba(102,187,255,0.16)',
      '12p': 'rgba(102,187,255,0.12)',
      '30p': 'rgba(102,187,255,0.30)',
      '50p': 'rgba(102,187,255,0.50)',
    },
  },
  error: {
    main: '#F44336',
    dark: '#D32F2F',
    light: '#E57373',
    contrastText: 'rgba(0,0,0,0.87)',
    shades: { '160p': '#FBB4AF', '190p': '#180705' },
  },
  warning: {
    main: '#FFCC80',
    dark: '#CA9B52',
    light: '#FFFFB0',
    contrastText: 'rgba(0,0,0,0.87)',
    shades: { '190p': '#1A140D' },
  },
  success: {
    main: '#66BB6A',
    dark: '#388E3C',
    light: '#81C784',
    contrastText: 'rgba(0,0,0,0.87)',
    shades: { '160p': '#C2E4C3', '190p': '#0A130B' },
  },
  info: {
    main: '#29B6F6',
    dark: '#0288D1',
    light: '#4FC3F7',
    contrastText: 'rgba(0,0,0,0.87)',
    shades: { '160p': '#A9E2FB', '190p': '#041219' },
  },
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255,255,255,0.70)',
    disabled: 'rgba(255,255,255,0.50)',
  },
  action: {
    active: 'rgba(255,255,255,0.56)',
    hover: 'rgba(255,255,255,0.08)',
    selected: 'rgba(255,255,255,0.16)',
    disabled: 'rgba(255,255,255,0.30)',
    disabledBackground: 'rgba(255,255,255,0.12)',
    focus: 'rgba(255,255,255,0.12)',
  },
  background: {
    default: '#121212',
    paper: '#121212',
  },
  divider: 'rgba(255,255,255,0.12)',
  common: { white: '#FFFFFF', black: '#000000' },
  grey,
  other: {
    divider: 'rgba(255,255,255,0.12)',
    outlinedBorder: 'rgba(255,255,255,0.23)',
    backdropOverlay: 'rgba(33,33,33,0.50)',
    filledInputBackground: 'rgba(255,255,255,0.09)',
    standardInputLine: 'rgba(255,255,255,0.42)',
    snackbar: '#323232',
    ratingActive: '#FFB400',
  },
  brand: {
    bright: '#FFFFFF',
    darker: '#FFFFFF',
  },
  extended,
};

// ─── Create themes ──────────────────────────────────────────────────────────
export const lightTheme = createTheme({
  palette: lightPalette,
  typography: sharedTypography,
  spacing: spacingFn,
  shadows: buildShadows(),
  shape: { borderRadius: 4 },
  components: sharedComponents,
});

export const darkTheme = createTheme({
  palette: darkPalette,
  typography: sharedTypography,
  spacing: spacingFn,
  shadows: buildShadows(),
  shape: { borderRadius: 4 },
  components: sharedComponents,
});

export default lightTheme;
