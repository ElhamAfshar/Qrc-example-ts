"use strict";
exports.__esModule = true;
exports.GenerateToken = void 0;
var jwt = require("jwt-simple");
var config = require("../config");
exports.GenerateToken = function (id) {
    var know = new Date().getTime();
    return jwt.encode({ id: id, time: know }, config.SecretKey);
};
