var assert = require("assert"),
    request = require('supertest')

var arrayLengthTest = function(res){
  if ( res.body.length == 0 ){
    throw new Error("length is zero");
  }
}

describe('API', function(){

  var url = "http://localhost:3000";

  describe('GET /bbc', function(){
    it('clean response', function(done){
      request(url)
       .get('/bbc')
       .expect(arrayLengthTest)
       .expect(200, done);
    })
  })

  describe('GET /cnn', function(){
    it('clean response', function(done){
      request(url)
       .get('/cnn')
       .expect(arrayLengthTest)
       .expect(200, done);
    })
  })

  describe('GET /fox', function(){
    it('clean response', function(done){
      request(url)
       .get('/foxa')
       .expect(arrayLengthTest)
       .expect(200, done);
    })
  })

})