var $ = require('cheerio'),
  request = require('request'),
  exports = module.exports = {}

exports.latest = function(req, res){
  var baseURL = "http://www.foxnews.com"
  function gotHTML(err, resp, html) {

    if (err) return console.error(err)

    var parsedHTML = $.load(html),
      alreadyAdded,
      output = [];

    parsedHTML('.latest-news > ul > li > a ').map(function(i, latest) {
      var href = $(latest).attr('href')
      var title = $(latest).text()

      // do not show the links twice, cnn adds video imgs with the same
      // href as the text beside it
      if(alreadyAdded !== href) {

        alreadyAdded = href

        var pat = /^https?:\/\//i;
        if ( !pat.test(href) ) {
          href = baseURL + href
        }


        var story = {
          href: href,
          title: title
        }
        output.push(story);

      }

    }) // end parsedHTML()

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(output)

  } // end gotHTML()

  request("http://www.foxnews.com/", gotHTML)
}