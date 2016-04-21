const knex = require('../db/knex');
const Users = require('../models/users')

function Skills() {
  return knex('skills');
}

function SkillsTeachers() {
  return knex('skills_teachers');
}
function SkillsLearners() {
  return knex('users');
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

module.exports = Skills;
