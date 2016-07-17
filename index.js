'use strict';

// Constants
const backgroundColor = '#343d46';
const dividerColor = backgroundColor;
const foregroundColor = '#65737e';
const selectionBackground = '#4f5b66';
const selectionForeground = '#a7adba';

// Apply theme
exports.decorateConfig = function (config) {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: dividerColor,
    cursorColor: selectionForeground,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
    `
  });
};
