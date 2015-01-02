var $ = require('cheerio'),
  request = require('request'),
  exports = module.exports = {}

exports.topNews = function(req, res){

  function gotHTML(err, resp, html) {

    var parsedHTML = $.load(html),
      alreadyAdded,
      output = [];

    parsedHTML('#top-news .story .story-heading > a').map(function(i, latest) {

      if ($(latest).attr('class') == 'nythpBriefingNewsletterSignup'){
        return
      }

      var href = $(latest).attr('href')
      var title = $(latest).text()

      var story = {
        href: href,
        title: title
      }

      output.push(story);

    }) // end parsedHTML()

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(output)

  } // end gotHTML()

  request("http://www.nytimes.com/", gotHTML)
}