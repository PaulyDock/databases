var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //console.log('GET, Request');
      var headers = this.headers;
      models.messages.get(function(err, results) {
        console.log('from callback: ', results);
        let statusCode = 200;
        res.writeHead(statusCode, headers);
        var data = {};
        
        data.results = results;
        res.end(JSON.stringify(data));
        this.end();
      });     
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var headers = this.headers;
      console.log("scott");
      models.messages.post(req, function(err, results) {
        console.log('from callback: ', results);
        let statusCode = 201;
        res.writeHead(statusCode, headers);
        var data = {};
        
        data.results = results;
        res.end(JSON.stringify(data));
        this.end();
      });     
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};
