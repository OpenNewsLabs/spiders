News Spiders
==========
A collection of crawlers for news web sites. API is used to grab links of the latest stories and provide them in a clean json format to be rendered however you need. Most news orgs do not provide an api to get their latest stories, so I have created my own...
Local installation
--------
This api relies on node.js so make sure you have a revent version installed. 

1. git clone https://github.com/OpenNewsLabs/spiders.git
2. cd spiders && npm install
3. node app

Current API
--------
After local installation is running all apis below can be viewed by appending to base path. example: "http://localhost:3000/cnn"


* GET /cnn
    ![current cnn query](https://raw.githubusercontent.com/OpenNewsLabs/spiders/master/crawlers/cnn/cnn.png)
* GET /fox
    ![current fox query](https://raw.githubusercontent.com/OpenNewsLabs/spiders/master/crawlers/fox/fox-latest.png)
* GET /bbc
    ![current bbc query](https://raw.githubusercontent.com/OpenNewsLabs/spiders/master/crawlers/bbc/bbc-current.png)

Testing
--------
API tests are run using mocha. Before you run mocha you must have the API running ( step three under local installation )
