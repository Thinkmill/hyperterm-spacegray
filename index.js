// Constants
const backgroundColor = '#343d46';
const foregroundColor = '#c0c5ce';
const darkerBackground = '#2F3841';
const borderColor = '#4f5b66';

// Colors
const RED = '#B4656F';
const GREEN = '#68A281';
const YELLOW = '#E2EB98';
const BLUE = '#5786B8';
const PINK = '#E0BAD7';
const CYAN = '#38CCD1';
const LIGHT_GRAY = foregroundColor;
const MEDIUM_GRAY = '#878C96';
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
    borderColor: borderColor,
    cursorColor: foregroundColor,
    colors,
    css: `
      ${config.css || ''}
      /* Highlight active tab by making rest of nav darker */
      .tabs_list {
        background-color: ${darkerBackground} !important;
      }

      /* Set tab colors */
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${darkerBackground} !important;
        border: none !important;
        border-right: 1px solid transparent !important;
        border-left: 1px solid transparent !important;
      }

      /* Hide bottom border if tab is active, make bg lighter */
      .tab_active {
        background-color: ${backgroundColor} !important;
        height: calc(100% + 1px);
        border-left: 1px solid ${borderColor} !important;
        border-right: 1px solid ${borderColor} !important;
      }

      .tab_tab:last-child {
        border-right: 1px solid transparent !important;
      }

      /* Hide hardcoded black bottom border */
      .tab_active:before {
        border-bottom: none !important;
      }

      .tab_text {
        border-color: transparent !important;
      }
    `
  })
);

// Development middleware for HMR
exports.middleware = () => (next) => (action) => {
  /* eslint-disable no-param-reassign, default-case */
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor;
      action.config.backgroundColor = backgroundColor;
      action.config.cursorColor = foregroundColor;
      action.config.colors = colors;
  }
  next(action);
};
