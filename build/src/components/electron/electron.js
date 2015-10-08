"use strict";
var global = window;
var ipc = global.require('ipc');
exports.ipc = ipc;
var remote = global.require('remote');
exports.remote = remote;
var webFrame = global.require('web-frame');
exports.webFrame = webFrame;
var clipboard = global.require('clipboard');
exports.clipboard = clipboard;
var crashReporter = global.require('crash-reporter');
exports.crashReporter = crashReporter;
var nativeImage = global.require('native-image');
exports.nativeImage = nativeImage;
var electronScreen = global.require('screen');
exports.electronScreen = electronScreen;
var shell = global.require('shell');
exports.shell = shell;
//# sourceMappingURL=electron.js.map