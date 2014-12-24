var $ = require('cheerio'),
  request = require('request'),
  exports = module.exports = {}

exports.latest = function(req, res){

  function gotHTML(err, resp, html) {

    if (err) return console.error(err)

    var parsedHTML = $.load(html),
      alreadyAdded,
      output = [];

    parsedHTML('.latest-news > ul > li > a ').map(function(i, latest) {

      var href = $(latest).attr('href')

      // do not show the links twice, cnn adds video imgs with the same
      // href as the text beside it
      if(alreadyAdded !== href) {

        alreadyAdded = href

        output.push(href);

      }

    }) // end parsedHTML()

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(output)

  } // end gotHTML()

  request("http://www.foxnews.com/", gotHTML)
}