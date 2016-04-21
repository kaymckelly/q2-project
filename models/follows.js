const knex = require('../db/knex');
const Users = require('../models/users')

function Follows() {
  return knex('follows');
}

Follows.addByName = (followerName, followeeName) => {
  Users().select('id').where({name: followerName}).first().then((follower) => {
    Users().select('id').where({name: followeeName}).first().then((followee) => {
      Follows().insert({follower_id: follower.id, followee_id: followee.id}).then((things) => {
        return things;
      }).catch((err) => {
        return err;
      })
    })
  })
}

Follows.addById = (followerId, FolloweeId) => {
  Follows().insert({follower_id: followerId, followee_id: followeeId}).then((woohoo) => {
    return woohoo;
  }).catch((err) => {
    return err;
  })
}

Follows.delByName = (followerName, followeeName) => {
  Users().select('id').where({name: followerName}).first().then((follower) => {
    Users().select('id').where({name: followeeName}).first().then((followee) => {
      Follows().del().where({follower_id: follower.id, followee_id: followee.id}).then((things) => {
        return things;
      }).catch((err) => {
        return err;
      })
    })
  })
}

Follows.delById = (followerId, FolloweeId) => {
  Follows().del().where({follower_id: followerId, followee_id: followeeId}).then((woohoo) => {
    return woohoo;
  }).catch((err) => {
    return err;
  })
}


module.exports = Follows;
