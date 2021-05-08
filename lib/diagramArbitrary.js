"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsverify_1 = require("jsverify");
function generateDiagram(_a) {
    var intervals = _a[0], endPause = _a[1];
    return Array(intervals.length)
        .fill('x')
        .reduce(function (acc, curr, i) {
        var pause = Array(intervals[i]).fill('-');
        return acc.concat(pause, [curr]);
    }, [])
        .concat(Array(endPause).fill('-'))
        .join('');
}
function sliceDiagram(diagram) {
    var pauses = diagram
        .split('x')
        .map(function (s) { return s.length; });
    var endPause = pauses[pauses.length - 1];
    return [pauses.slice(0, -1), endPause];
}
exports.diagramArbitrary = jsverify_1.tuple([
    jsverify_1.array(jsverify_1.nat),
    jsverify_1.nat
]).smap(generateDiagram, sliceDiagram);
