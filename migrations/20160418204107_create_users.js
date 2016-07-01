exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id');
      table.string('email');
      table.string('name');
      table.string('location');
      table.string('img_url');
      table.text('blurb');
      table.string('password_digest').notNullable();
      table.boolean('admin');
    }),

    knex.schema.createTable('follows', function(table) {
      table.integer('follower_id');
      table.integer('followee_id');
    }),

    knex.schema.createTable('skills', function(table) {
      table.increments('id');
      table.string('name');
    }),

    knex.schema.createTable('skills_teachers', function(table) {
      table.integer('teacher_id');
      table.integer('skill_id');
    }),

    knex.schema.createTable('skills_learners', function(table) {
      table.integer('learner_id');
      table.integer('skill_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
   knex.schema.dropTable('users'),
   knex.schema.dropTable('follows'),
   knex.schema.dropTable('skills'),
   knex.schema.dropTable('skills_teachers'),
   knex.schema.dropTable('skills_learners')
  ])
};
