var $ = require('cheerio'),
  request = require('request'),
  exports = module.exports = {}

exports.latest = function(req, res){
  var baseURL = "http://www.bbc.com"
  function gotHTML(err, resp, html) {

    if (err) return console.error(err)

    var parsedHTML = $.load(html),
      alreadyAdded,
      output = [];

    parsedHTML('.hero_image_link').map(function(i, latest) {

      var href = $(latest).attr('href')
      var title = $(latest).attr('title')
      var img = $(latest).children('img').attr('src')

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
          title: title,
          img: img
        }
        output.push(story);

      }

    }) // end parsedHTML()

    parsedHTML('a.media_link').map(function(i, latest) {

      var href = $(latest).attr('href')
      var title = $(latest).attr('title')
      var img = $(latest).children('span').children('img').attr('src')
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
          title: title,
          img: img
        }
        output.push(story);

      }

    }) // end parsedHTML()

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(output)

  } // end gotHTML()

  request("http://www.bbc.com/", gotHTML)
}