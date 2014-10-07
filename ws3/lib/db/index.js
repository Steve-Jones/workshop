function foo() {
  return "foo";
}
exports.foo = foo;

var pg = require('pg');
//var m = require('db');

var connString = 'postgres://student:student@localhost/student';

function getUsers(callback) {
  pg.connect(connString, function (err, client, done) {
    if (err) {
      callback(err);
    }
    else {
      client.query('select U.fname, U.lname, U.password, U.age, A.street, A.city, A.state, A.zipcode from address A, users U, lives L', function (err, result) {
        // Ends the "transaction":
        done();
        // Disconnects from the database:
        client.end();
        if (err) {
          callback(err);
        }
        else {
          callback(undefined, result.rows);
        }
      });
    }
  });
}

function createUser(uid, fname, lname, passwd, age, callback) {
  pg.connect(connString, function (err, client, done) {
    if (err) {
      callback(err);
    }
    else {
      var str = 'insert into users (uid, fname, lname, password, age) values ($1, $2, $3, $4, $5)';
      client.query(str, [uid, fname, lname, passwd, age],
        function (err, result) {
          // Ends the "transaction":
          done();
          // Disconnects from the database:
          client.end();
          if (err) {
            callback(err);
          }
          else {
            callback(undefined, result.rows);
          }
      });
    }
  });
}

function updatePassword(fname, lname, passwd, callback) {
  pg.connect(connString, function (err, client, done) {
    if (err) {
      callback(err);
    }
    else {
      var str = 'update users set password=$1 where fname=$2 and lname=$3';
      client.query(str, [passwd, fname, lname],
        function (err, result) {
            // Ends the "transaction":
            done();
            // Disconnects from the database:
            client.end();
            if (err) {
		callback(err);
            }
            else {
		callback(undefined, result.rows);
            }
	});
    }
  });
}

function printUsers(err, users) {
  if (err) {
    throw err;
  }
  else {
    users.forEach(function (user) {
      console.log(user);
    });
  }
}

function printUserNames(err, users) {
  if (err) {
    throw err;
  }
  else {
    users.forEach(function (user) {
      console.log(user.fname);
    });
  }
}

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.updatePassword = updatePassword;
exports.printUsers = printUsers;
exports.printUserNames = printUserNames;
