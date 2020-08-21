const db = require('../../database/dbConfig');

module.exports = {
    getAll: () =>{
        return db("posts as p")
                .join("post_image as pi", "p.id", "pi.post_id")
                .join("images as i", "i.id", "pi.image_id")
                // .join("post_comment as pc", "p.id", "pc.post_id")
                // .join("comments as c", "c.id", "pc.comment_id")
                .select(
                    "p.id",
                    "p.title",
                    "p.content",
                    "p.likes",
                    "p.created_at",
                    "i.image_url",
                //     "c.comment"
                )
    },
    getById: (postId) => {
        return db("posts as p")
                .where("p.id", postId)
                .join("post_image as pi", "p.id", "pi.post_id")
                .join("images as i", "i.id", "pi.image_id")
                // .join("post_comment as pc", "p.id", "pc.post_id")
                // .join("comments as c", "c.id", "pc.comment_id")
                .select(
                    "p.id",
                    "p.title",
                    "p.content",
                    "p.likes",
                    "p.created_at",
                    "i.image_url",
                    // "c.comment"
                )
    },
    create: (post) => {
        return db("posts")
                .returning("id")
                .insert(post)
                .then(ids => ({id: ids[0]}))
    },
    createPostImage: (ids) => {
        return db("post_image as pi")
                .returning("id")
                .insert(ids)
                .then(ids => ({id: ids[0]}))
    },
    del: (id) => {
        return db("posts")
                .where({id: id})
                .del()
    }
}