const express = require('express')
const path = require("path")
const weatherRoutes = require('./routes/weather')
const bodyParser = require('body-parser');

const server = express()
// server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
// server.use(bodyParser.json())

// Routes

server.use('/api/weather', weatherRoutes)

server.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  
module.exports = server
