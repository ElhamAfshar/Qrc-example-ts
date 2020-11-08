"use strict";
exports.__esModule = true;
exports.clientRedis = void 0;
var express_1 = require("express");
var mongoose = require("mongoose");
var ioredis_1 = require("ioredis");
var route_1 = require("./routes/route");
mongoose.connect('mongodb://localhost/QRC', { useNewUrlParser: true });
var app = express_1["default"]();
exports.clientRedis = new ioredis_1["default"]();
var port = 3000;
route_1.router(app);
app.listen(port, function () {
    console.log("strat server ...");
});
