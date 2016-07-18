'use strict';

// Constants
const backgroundColor = '#343d46';
const dividerColor = backgroundColor;
const foregroundColor = '#c0c5ce';
const selectionBackground = '#4f5b66';
const selectionForeground = '#a7adba';

// Apply theme
exports.decorateConfig = function (config) {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: dividerColor,
    cursorColor: selectionForeground,
    // TODO Add colors array here, figure out what each color is used for
    colors: [
      '#FFFFFF'
    ],
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor} !important;
      }
    `
  });
};
