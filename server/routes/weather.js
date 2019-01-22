const express = require('express')
const fs = require('fs')
const router = express.Router()

const { arrCleaner } = require('../utils/arrCleaner');
const { arrTrimmer } = require('../utils/arrTrimmer')
const { maxMinArrBuilder } = require('../utils/maxMinArrBuilder')
const { findDifference } = require('../utils/findDifference')
const { sortedArray } = require('../utils/sortedArray')



let weatherData = fs.readFileSync('server/data/weather.dat', 'utf8').toString("utf8").split("\n").map((i) => {
  return i.split(" ");
});

let cleanedArr = arrCleaner(weatherData);

let trimmedArr = arrTrimmer(cleanedArr);

let data = maxMinArrBuilder(trimmedArr);


router.get('/', (req, res) => {
  res.send(data)
})

module.exports = router
