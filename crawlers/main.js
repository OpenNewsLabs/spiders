var exports = module.exports = {}

var bbc = require("./bbc/main.js");
var cnn = require("./cnn/main.js");
var fox = require("./fox/main.js");

exports.bbc = {
  latest: function(req, res) {
    bbc.latest(req, res);
  }
}

exports.cnn = {
  latest: function(req, res) {
    cnn.latest(req, res);
  }
}

exports.fox = {
  latest: function(req, res) {
    fox.latest(req, res);
  }
}

