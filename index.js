"use strict";
exports.__esModule = true;
exports.rmComment = void 0;
function rmComment(str) {
    var x = str.replace(/(\/\/).*\n/g, '');
    return x.replace(/(\/\*+)[\s\S]*(\*\/)/g, '');
}
exports.rmComment = rmComment;
