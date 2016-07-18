// Constants
const backgroundColor = '#343d46';
const foregroundColor = '#c0c5ce';

// Colors
// TODO Figure out good color for Cyan
const colors = [
  backgroundColor,
  '#9B4444', // red
  '#68A281', // green
  '#FFAA2C', // yellow
  '#5786B8', // blue
  '#DB2FF4', // pink
  '#5786B8', // cyan
  '#a7adba', // light gray
  '#4f5b66', // medium gray
  '#9B4444', // red
  '#68A281', // green
  '#FFAA2C', // yellow
  '#5786B8', // blue
  '#DB2FF4', // pink
  '#5786B8', // cyan
  '#ffffff', // white
  foregroundColor
];

// Apply theme
exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
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
