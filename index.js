// Constants
const backgroundColor = '#343d46';
const foregroundColor = '#c0c5ce';

// Colors
const RED = '#B4656F';
const GREEN = '#68A281';
const YELLOW = '#E2EB98';
const BLUE = '#5786B8';
const PINK = '#E0BAD7';
const CYAN = '#38CCD1';
const LIGHT_GRAY = '#a7adba';
const MEDIUM_GRAY = '#4f5b66';
const WHITE = '#ffffff';

const colors = [
  backgroundColor,
  RED,
  GREEN,
  YELLOW,
  BLUE,
  PINK,
  CYAN,
  LIGHT_GRAY,
  MEDIUM_GRAY,
  RED,
  GREEN,
  YELLOW,
  BLUE,
  PINK,
  CYAN,
  WHITE,
  foregroundColor
];

// Apply theme
exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: LIGHT_GRAY,
    cursorColor: foregroundColor,
    colors,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor} !important;
      }
    `
  })
);
