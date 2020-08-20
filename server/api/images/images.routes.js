const router = require('express').Router();
const cloudinary = require('cloudinary');
require('dotenv').config();
const Images = require('./images.queries');
const Posts = require('../posts/posts.queries')

const cloud_name = process.env.CLOUD_NAME 
const api_key = process.env.API_KEY 
const api_secret = process.env.API_SECRET 

cloudinary.config({
    cloud_name: `${cloud_name}`,
    api_key: `${api_key}`,
    api_secret: `${api_secret}`
})

router.post('/forPost/:postId', (req,res) => {
    console.log(req.files)
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))
    const postId = parseInt(req.params.postId)
    Promise
        .all(promises)
        .then(results => {
            for (let i=0; i<results.length; i++){
                const imageToPost = {
                    image_url: results[i].secure_url
                }
                Images
                    .create(imageToPost)
                    .then(response => {
                        const imageId = response.id
                        Posts
                            .createPostImage({
                                image_id: imageId,
                                post_id: postId
                            })
                            .then(newres => {
                                res.status(200).json(results)
                            })
                            .catch(err => {
                                res.status(500).json(err)
                            })
                    })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;