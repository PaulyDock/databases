var db = require('../db');
var mysql = require('mysql');
// var sqlPromise = require('mysql-query-promise');
// var mysql = require('promise-mysql');


module.exports = {
  messages: {
    get: function (callback) {
      db.queryDB('SELECT m.text, r.roomname, u.username FROM messages m INNER JOIN rooms r INNER JOIN \
     users u ON m.room_id = r.id AND m.user_id = u.id', [], callback);
     
     
      // let dbLogin = {
      //   user: 'root',
      //   password: 'plantlife',
      //   database: 'chat'
      // };
      // console.log('GET in models');
      // dbConnection = mysql.createConnection(dbLogin);
      // dbConnection.connect(function(err) {
      //   if (err) { throw err; }
      //   console.log('connected to ', dbLogin.database);
      // });
      // dbConnection.query(
      //   'SELECT m.text, r.roomname, u.username FROM messages m INNER JOIN rooms r INNER JOIN \
      //    users u ON m.room_id = r.id AND m.user_id = u.id'
      // , [], callback);
    }, // a function which produces all the messages

    post: function (req, callback) { // a function which can be used to insert a message into the database
      var data = '';
      // console.log("requeset body: ",req.body);
      
      req.on('data', function(chunk) {
        data += chunk;
      });
      req.on('end', function() {
        // console.log('data: ', JSON.parse(data));
        let parsedData = JSON.parse(data);
        console.log('you are about to post');
        db.multiQueryDB(['INSERT INTO users (username) VALUES("lol")'], [], callback);
      });
    }  
  },
// INSERT INTO rooms (roomname)
                  // VALUES();
                  // INSERT INTO messages (text)
                  // VALUES();
  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

//has roomname prop
//username
//text (content)
//createdAt


//
    // get: function() {
    //   var connection;

    //   var resultswhatever = mysql.createConnection({
    //     user: 'root',
    //     password: 'plantlife',
    //     database: 'chat'
    //   }).then(function(conn) {
    //     connection = conn;
         
    //     return connection.query('select * from messages');
    //   }).then(function(messages) {
    //     console.log('first message: ', messages[0]);
    //     return messages;
    //   });
      
    //   console.log(resultswhatever);
    // },
