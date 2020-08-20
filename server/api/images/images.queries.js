const db = require('../../database/dbConfig');

module.exports = {
    create: (img_url) => {
        return db("images as i")
                .returning("id")
                .insert(img_url)
                .then(ids => ({id: ids[0]}))
    }
}