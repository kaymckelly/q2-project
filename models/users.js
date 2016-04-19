const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function Users() {
  return knex('users');
}

Users.createUser = (userData, callback) => {
  bcrypt.hash(userData.password, saltRounds, (err, hash) => {
    if (err) {
      return callback(err);
    }
    else {

      userData.password_digest = hash;
      delete userData.password;
      Users().insert(userData, '*').then((user) => {
        callback(undefined, user);
      });
    }
  });
}

Users.authenticateUser = (email, password, callback) => {
  Users().where({ email: email}).first().then((user) => {
    brcypt.compare(password, user.password_digest, (err, isMatch) => {
      if (err || !isMatch) {
        return callback("Sorry, email and password do not match");
      }
      else {
        return callback(undefined, user);
      }
    })
  })
}

Users.findById = (userId) => {
  Users().where({ id: userId }).first().then((user) => {
    return user;
  });
}

Users.findByEmail = (userEmail) => {
  Users().where({ email: userEmail }).first().then((user) => {
    return user;
  });
}

module.exports = Users;
