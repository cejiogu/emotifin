const express = require('express')

const app = express()

app.listen(3000, () => {
    console.log('app listening on port 3000')
})

// routes
app.get('/emotion', (req, res) => {
    res.json({mssg: "welcome to the api"})
})