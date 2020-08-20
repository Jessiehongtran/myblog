const express = require('express');
const bodyParser = require('body-parser');
const formData = require('express-form-data');
const cors = require('cors')
const app = express();

const postRoutes = require('./api/posts/posts.routes');
const imageRoutes = require('./api/images/images.routes');

app.use(bodyParser.json());
app.use(cors())
app.use(formData.parse());

app.use('/posts', postRoutes);
app.use('/images', imageRoutes);
app.use('/', (req,res) => {
    res.send("hello")
})


module.exports = app;