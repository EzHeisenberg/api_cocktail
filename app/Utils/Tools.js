'use strict';
require('dotenv').config();
const {v4: uuid} = require('uuid');
const semver = require('semver');


let Tools = {
    uuid: () => {
        return uuid();
    },

}
module.exports = Tools;