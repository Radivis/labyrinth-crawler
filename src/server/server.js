const express = require('express')
const cors = require('cors')
const fs = require('fs');
const { send } = require('process');

const server = express();

const port = 3010

server.use(express.json({}))

server.use(cors())

server.use(express.static('public', {
    extensions: ['html']
}))

server.get('/load', (req, res) => {
    fs.readFile('public/game.json', 'utf8', (err, data) => {
        res.send(data)
    })
})

server.post('/save', (req, res) => {
    fs.writeFile('public/game.json', JSON.stringify(req.body), {}, () => {return true})
})

server.listen(port, err => console.log(err || `Server läuft auf Port ${port}`));