"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ROOT: '"//test.dvpnet.io:8080"'
  API_ROOT: '""'
});
