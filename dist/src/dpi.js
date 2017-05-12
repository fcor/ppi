"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ppi;
//ppi function calculates pixel per inch for screen monitors
function ppi(hRes, vRes, diagSize) {
  var diagRes = Math.sqrt(Math.pow(hRes, 2) + Math.pow(vRes, 2));
  var PPI = Math.round(diagRes / diagSize);
  return PPI;
}