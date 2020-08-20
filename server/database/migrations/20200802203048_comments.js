
exports.up = function(knex) {
  return knex.schema.createTable('comments', tbl => {
      tbl.increments()
      tbl.text('comment')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments')
};
