import { combineReducers } from 'redux'
import { weatherData } from './weatherData'
import { stringSplitMap } from './stringSplitMap'
import { arrCleaner } from './arrCleaner'
import { arrTrimmer } from './arrTrimmer'
import { maxMinArrBuilder } from './maxMinArrBuilder'
import { findDifference } from './findDifference'
import { sortedArray } from './sortedArray'


export default combineReducers({
   weatherData,
   stringSplitMap,
   arrCleaner,
   arrTrimmer,
   maxMinArrBuilder,
   findDifference,
   sortedArray
})
