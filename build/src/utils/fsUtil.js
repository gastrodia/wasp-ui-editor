/**
 * Wraps fs and path into a nice "consistentPath" API
 */
/** we work with "/" for all paths (so does the typescript language service) */
function consistentPath(filePath) {
    return filePath.split('\\').join('/');
}
exports.consistentPath = consistentPath;
var path = require("path");
/**
 * Resolves to to an absolute path.
 * @param from,to,to,to...
 */
function resolve() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return consistentPath(path.resolve.apply(path, args));
}
exports.resolve = resolve;
/**
 * Could be called ends with :)
 */
function isExt(path, ext) {
    return path && path.indexOf(ext, path.length - ext.length) !== -1;
}
exports.isExt = isExt;
/**
 * Converts "C:\boo" , "C:\boo\foo.ts" => "./foo.ts"; Works on unix as well.
 */
function makeRelativePath(relativeFolder, filePath) {
    var relativePath = path.relative(relativeFolder, filePath).split('\\').join('/');
    if (relativePath[0] !== '.') {
        relativePath = './' + relativePath;
    }
    return relativePath;
}
exports.makeRelativePath = makeRelativePath;
function removeExt(filePath) {
    return filePath.substr(0, filePath.lastIndexOf('.'));
}
exports.removeExt = removeExt;
//# sourceMappingURL=fsUtil.js.map