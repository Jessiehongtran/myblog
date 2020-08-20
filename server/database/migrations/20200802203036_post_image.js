
exports.up = function(knex) {
  return knex.schema.createTable('post_image', tbl => {
      tbl.increments()
      tbl.integer('post_id')
      tbl.integer('image_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('post_image')
};
