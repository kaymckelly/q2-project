const knex = require('../db/knex');
const Users = require('../models/users')

function Skills() {
  return knex('skills');
}

function SkillsTeachers() {
  return knex('skills_teachers');
}
function SkillsLearners() {
  return knex('skills_learners');
}


Skills.addNew = (skillName) => {
 Skills().insert({name: skillName}).then((skill) => {
   return skill;
 }).catch((err) => {
   return err;
 })
}

Skills.addToTeacher = (skillName, userName) => {
 Users().select('id').where({name: userName}).first().then((userId) => {
   Skills().select('id').where({name: skillName}).first().then((skillId) => {
     SkillsTeachers().insert({skill_id: skillId.id, teacher_id: userId.id}).then((stuff) => {
       return stuff;
     }).catch((err) => {
       return err;
     })
   })
 })
}

Skills.delFromTeacher = (skillName, userName) => {
 Users().select('id').where({name: userName}).first().then((userId) => {
   Skills().select('id').where({name: skillName}).first().then((skillId) => {
     SkillsTeachers().del().where({skill_id: skillId.id, teacher_id: userId.id}).then((stuff) => {
       return stuff;
     }).catch((err) => {
       return err;
     })
   })
 })
}

Skills.addToLearner = (skillName, userName) => {
  Users().select('id').where({name: userName}).first().then((userId) => {
    Skills().select('id').where({name: skillName}).first().then((skillId) => {
      SkillsLearners().insert({skill_id: skillId.id, teacher_id: userId.id}).then((stuff) => {
        return stuff;
      }).catch((err) => {
        return err;
      })
    })
  })
}

Skills.delFromLearner = (skillName, userName) => {
 Users().select('id').where({name: userName}).first().then((userId) => {
   Skills().select('id').where({name: skillName}).first().then((skillId) => {
     SkillsLearners().del().where({skill_id: skillId.id, teacher_id: userId.id}).then((stuff) => {
       return stuff;
     }).catch((err) => {
       return err;
     })
   })
 })
}
module.exports = Skills;
