"use strict";
exports.__esModule = true;
exports.GetVal = exports.SetEx = void 0;
var index_1 = require("../index");
// const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
exports.SetEx = function (userId, val, time) {
    index_1.clientRedis.set(userId, val, "ex", time);
};
exports.GetVal = function (userId) {
    return index_1.clientRedis.get(userId);
};
