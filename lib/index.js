"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var xstream_1 = require("xstream");
var time_1 = require("@cycle/time");
var diagramArbitrary_1 = require("./diagramArbitrary");
exports.diagramArbitrary = diagramArbitrary_1.diagramArbitrary;
var undefinedOr_1 = require("./undefinedOr");
exports.undefinedOr = undefinedOr_1.undefinedOr;
function promise(run) {
    return new Promise(function (resolve, reject) { return run(function (err) { return err ? reject(err) : resolve(true); }); });
}
exports.promise = promise;
function withTime(test, args) {
    return function () {
        var Time = time_1.mockTimeSource(args);
        test(Time);
        return promise(Time.run);
    };
}
exports.withTime = withTime;
function addPrevState(main, prevState, stateName) {
    if (stateName === void 0) { stateName = 'state'; }
    return function (sources) {
        var _a;
        var initReducer = xstream_1.default.of(function () { return prevState; });
        var appSinks = main(sources);
        return __assign({}, appSinks, (_a = {}, _a[stateName] = xstream_1.default.merge(initReducer, appSinks[stateName] || xstream_1.default.never()), _a));
    };
}
exports.addPrevState = addPrevState;
