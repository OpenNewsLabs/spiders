var $ = require('cheerio'),
  request = require('request')

function gotHTML(err, resp, html) {

  if (err) return console.error(err)

  var parsedHTML = $.load(html),
    alreadyAdded;

  parsedHTML('a.media_link').map(function(i, latest) {

    var href = $(latest).attr('href')

    // do not show the links twice, cnn adds video imgs with the same
    // href as the text beside it
    if(alreadyAdded !== href) {

      alreadyAdded = href

      console.log(href);

    }

  }) // end parsedHTML()

} // end gotHTML()

request("http://www.bbc.com/", gotHTML)