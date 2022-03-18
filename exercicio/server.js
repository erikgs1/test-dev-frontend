var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/', (req, res) => {
    console.log("__dirname:    ", __dirname);
res.sendFile(__dirname + '/data/exercicio.js');
})

app.listen(3000, () => {
    console.log(`Listening on port: 3000`)
})