const express = require('express')
const fs = require('fs')
const router = express.Router()

const { arrCleaner } = require('../utils/arrCleaner');
const { arrTrimmer } = require('../utils/arrTrimmer')
const { maxMinArrBuilder } = require('../utils/maxMinArrBuilder')
const { findDifference } = require('../utils/findDifference')




let weatherData = fs.readFileSync('server/data/weather.dat', 'utf8').toString("utf8").split("\n").map((i) => {
  return i.split(" ");
});

//Clean Data

let cleanedArr = arrCleaner(weatherData);
let trimmedArr = arrTrimmer(cleanedArr);
let maxMinArr = maxMinArrBuilder(trimmedArr);
let addDifference = findDifference(maxMinArr);
let data = JSON.stringify(addDifference);

router.get('/', (req, res) => {
  res.send(data)
})

module.exports = router
