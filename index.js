// Constants
const backgroundColor = '#343d46';
const foregroundColor = '#c0c5ce';
const darkerBackground = '#2F3841';

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
    borderColor: MEDIUM_GRAY,
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
        border-left: 1px solid ${MEDIUM_GRAY};
      }

      /* Hide bottom border if tab is active, make bg lighter */
      .tab_active {
        background-color: ${backgroundColor} !important;
        height: calc(100% + 1px);
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
