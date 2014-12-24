var crawl = require("./crawlers/main.js");
var express = require('express')
var app = express()

app.get('/bbc', function (req, res) {
  console.log("request /bbc")
  crawl.bbc.latest(req, res);
})

app.get('/cnn', function (req, res) {
  console.log("request /cnn")
  crawl.cnn.latest(req, res);
})

app.get('/fox', function (req, res) {
  console.log("request /fox")
  crawl.fox.latest(req, res);
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('spider api listening at http://%s:%s', host, port)

})