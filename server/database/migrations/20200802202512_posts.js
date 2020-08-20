
exports.up = function(knex) {
  return knex.schema.createTable('posts', tbl => {
      tbl.increments()
      tbl.string('title')
      tbl.text('content')
      tbl.integer('likes')
  })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('posts')
};
