const router = require('express').Router();
const Posts = require('./posts.queries');

//GET all posts
router.get('/', async (req,res) => {
    try {
        const posts = await Posts.getAll()
        console.log(posts)
        res.status(200).json(posts)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET a post by id
router.get('/:postId', async (req,res) => {
    const postId = req.params.postId
    try {
        const post = await Posts.getById(postId)
        res.status(200).json(post)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//POST a post
router.post('/',   async (req,res) => {
    const post = req.body   
    try {
        const id = await Posts.create(post)
        console.log(id)
        res.status(200).json(id)
    } catch (err){
        res.status(500).json(err.message)
    }     
})

//EDIT a post

//DELETE a post
router.delete('/:postId', async (req,res) => {
    const postId = req.params.postId
    try {
        await Posts.del(postId)
        res.status(200).json({message: "Deleted 1 post"})
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router;