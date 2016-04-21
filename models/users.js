const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function Users() {
  return knex('users');
}

Users.getAll = () => {
  return Users().select();
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
        callback(undefined, user[0]);
      }).catch((err) => {
        return callback(err);
      });
    }
  });
}

Users.authenticateUser = (email, password, callback) => {
  Users().where({ email: email}).first().then((user) => {
    bcrypt.compare(password, user.password_digest, (err, isMatch) => {
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
  return Users().where({ id: userId }).first();
}

Users.findByEmail = (userEmail) => {
  return Users().where({ email: userEmail }).first();
}

module.exports = Users;
