const express = require('express')
const app = express()
const port = 3000


app.use(express.static('static'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/html/landing.html')
})

app.get('/render/aquasynthara', (req, res) => {
    res.sendFile(__dirname + '/static/html/renderer.html')
})

app.get('/render/scroll', (req, res) => {
    res.sendFile(__dirname + '/static/html/scroll-renderer.html')
})

app.get('/render/info', (req, res) => {
    res.sendFile(__dirname + '/static/html/staticrenderer.html')
})

app.get('/extendedinfo', (req, res) => {
    res.sendFile(__dirname + '/static/html/extendedinfo.html')
})


// API

app.get('/api/')


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/`)
})