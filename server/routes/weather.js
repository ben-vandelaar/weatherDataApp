const express = require('express')
const fs = require('fs')

var data = fs.readFileSync('server/data/weather.dat', 'utf8');

const router = express.Router()

router.get('/', (req, res) => {
  res.send(data)
})

module.exports = router
