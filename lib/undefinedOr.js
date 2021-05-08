"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsverify_1 = require("jsverify");
function undefinedOr(arb) {
    return jsverify_1.tuple([jsverify_1.bool, arb])
        .smap(function (_a) {
        var b = _a[0], v = _a[1];
        return b ? v : undefined;
    }, function (v) { return [v !== undefined, v]; });
}
exports.undefinedOr = undefinedOr;
