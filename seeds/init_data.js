
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('skills').del(),

    // Inserts seed entries
    knex('skills').insert({
      name: 'Javascript'
    }),
    knex('skills').insert({
      name: 'Node'
    }),
    knex('skills').insert({
      name: 'HTML'
    }),
    knex('skills').insert({
      name: 'CSS'
    }),
    knex('skills').insert({
      name: 'Express'
    }),
    knex('skills').insert({
      name: 'PostgreSQL'
    }),
    knex('skills').insert({
      name: 'Jquery'
    }),
    knex('skills').insert({
      name: 'Ruby'
    }),
    knex('skills').insert({
      name: 'AngularJS'
    }),
    knex('skills').insert({
      name: 'Rust'
    }),
    knex('skills').insert({
      name: 'Python'
    }),
    knex('skills').insert({
      name: 'Bootstrap'
    }),
    knex('skills').insert({
      name: 'Java'
    }),
    knex('skills').insert({
      name: 'AJAX'
    }),
    knex('skills').insert({
      name: 'Web APIs'
    }),
    knex('skills').insert({
      name: 'WebGL'
    }),
    knex('skills').insert({
      name: 'Aurelia'
    }),
    knex('skills').insert({
      name: 'React'
    }),
    knex('skills').insert({
      name: 'Wordpress'
    }),
    knex('skills').insert({
      name: 'Drupal'
    }),
    knex('skills').insert({
      name: 'Sass'
    }),
    knex('skills').insert({
      name: 'Less'
    }),
    knex('skills').insert({
      name: 'PHP'
    }),
    knex('skills').insert({
      name: 'C++'
    }),
    knex('skills').insert({
      name: 'C'
    }),
    knex('skills').insert({
      name: 'Go'
    })
  );
};
