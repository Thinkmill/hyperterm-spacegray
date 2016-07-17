'use strict';
var assign = require('object-assign');

// Constants
var backgroundColor = #343d46;
var dividerColor = backgroundColor;
var foregroundColor = #65737e;
var selectionBackground = #4f5b66;
var selectionForeground = #a7adba;

// Apply theme
exports.decorateConfig = function (config) {
  return assign({}, config, {
    backgroundColor: backgroundColor,
    foregroundColor: foregroundColor,
    borderColor: dividerColor,
    cursorColor: selectionForeground,
  });
};
