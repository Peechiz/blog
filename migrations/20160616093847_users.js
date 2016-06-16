exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('user');
    table.string('avatar');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
