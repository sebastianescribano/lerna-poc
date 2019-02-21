'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var first = require('@packages/first');

var second = function second() {
  console.log('Inside second: ', first());
  console.log('Second');
};

var _default = second;
exports.default = _default;
module.exports = exports.default;