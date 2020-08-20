
exports.up = function(knex) {
  return knex.schema.createTable('posts', tbl => {
      tbl.increments()
      tbl.string('title').notNullable()
      tbl.text('content').notNullable()
      tbl.integer('likes')
      tbl.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('posts')
};
