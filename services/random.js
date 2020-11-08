"use strict";
//const Math =require ("Math")
exports.__esModule = true;
exports.RandomBetween = void 0;
exports.RandomBetween = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
