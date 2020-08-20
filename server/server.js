const app = require('./app')

const PORT = process.env.PORT || 4001
app.listen(PORT, () => {
    console.log(`Server is up on running on port ${PORT}`)
})