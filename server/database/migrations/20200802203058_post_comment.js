
exports.up = function(knex) {
  return knex.schema.createTable('post_comment', tbl => {
      tbl.increments()
      tbl.integer('post_id')
      tbl.integer('comment_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('post_comment')
};
