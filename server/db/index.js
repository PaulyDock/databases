var mysql = require('mysql');


module.exports = {
  dbLogin: {
    user: 'root',
    password: 'plantlife',
    database: 'chat'
  },

  openConnection: function() {
    var dbLogin = this.dbLogin;
    dbConnection = mysql.createConnection(dbLogin);
    dbConnection.connect(function(err) {
      if (err) { throw err; }
      console.log('connected to ', dbLogin.database);
    });
  },

  queryDB: function(query, queryArgs, callback) {
    this.openConnection();
    dbConnection.query(query, queryArgs, callback);
    dbConnection.end();
  },


  multiQueryDB: function(queryArray, queryArgs, callback) {  
    this.openConnection();
    for (var i = 0; i < queryArray.length; i++) {
      (function(i) { dbConnection.query(queryArray[i], queryArgs, callback); })(i);
    }
    dbConnection.end();
  }

};

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


