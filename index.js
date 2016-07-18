// Constants
const backgroundColor = '#343d46';
const foregroundColor = '#c0c5ce';
const selectionBackground = '#4f5b66';
const selectionForeground = '#a7adba';

// Apply theme
exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: dividerColor,
    cursorColor: selectionForeground,
    // TODO Add colors array here, figure out what each color is used for
    colors: [
      '#FFFFFF'
    ],
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor} !important;
      }
    `
  })
);
