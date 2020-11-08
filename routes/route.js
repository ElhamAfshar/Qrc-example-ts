"use strict";
exports.__esModule = true;
exports.router = void 0;
var body_parser_1 = require("body-parser");
var api = require("../controllers/Authentication");
exports.router = function (app) {
    var parser = body_parser_1["default"].json();
    app.route('/req-code').post(parser, api.reqcode);
    app.route('/get-token').post(parser, api.reqcode);
};
