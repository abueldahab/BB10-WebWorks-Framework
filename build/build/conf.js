/*
* Copyright 2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var path = require("path");

module.exports = {
    ROOT: path.normalize(__dirname + "/../../"),
    DEPLOY: path.normalize(__dirname + "/../../target/zip/"),
    TARGET: path.normalize(__dirname + "/../../target/"),
    BUILD: path.normalize(__dirname + "/.."),
    LIB: path.normalize(__dirname + "/../../lib"),
    BIN: path.normalize(__dirname + "/../../bin"),
    DEPENDENCIES : path.normalize(__dirname + "/../../dependencies"),
    DEPENDENCIES_EMU_LIB: path.normalize(__dirname + "/../../dependencies/BBX-Emulator/lib"),
    NODE_MOD: path.normalize(__dirname + "/../../node_modules")
};
