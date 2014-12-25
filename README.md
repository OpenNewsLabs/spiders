News Spiders
==========
A collection of crawlers for news web sites. This is used to grab links of the latest stories and provide them in a clean api. Most news orgs do not provide an api to get their latest stories. So I have created my own.

Local installation
--------

1. git clone
2. npm install
3. node app

Current API
--------
After local installation is running all apis below can be viewed by appending to base path. example: "http://localhost:3000/cnn"

Sites are scraped using css queries to grab proper anchor hrefs

* /cnn
    * .cnn_mtt1content > div > ul > li > a 
    ![current cnn query](https://raw.githubusercontent.com/OpenNewsLabs/spiders/master/crawlers/cnn/cnn.png)
* /fox
    * .latest-news > ul > li > a
    ![current fox query](https://raw.githubusercontent.com/OpenNewsLabs/spiders/master/crawlers/fox/fox-latest.png)
* /bbc
    * .hero_image_link'
    * a.media_link
    ![current bbc query](https://raw.githubusercontent.com/OpenNewsLabs/spiders/master/crawlers/bbc/bbc-current.png)

Testing
--------
API tests are run using mocha. Before you run mocha you must have the API running ( step three under local installation )
