var compress = require("../../../src/node/modules/compress");
var io = require("../../../src/node/modules/io");
var path = require("path");
var fs = require("fs-extra");

// var pack = path.join(__dirname, "resources/compress/pack/**/*.*");
var pack = path.join(__dirname, "resources/compress/pack");
var unpack = path.join(__dirname, "resources/compress/unpack");
var out = path.join(__dirname, "resources/compress/compress.zip");


compress.packSync(pack, out, null);