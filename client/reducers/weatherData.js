function weatherData(state = [], action) {
  switch (action.type) {
    case "WEATHER_DATA":
      return action.data
    default:
      return state
  }
}

export default weatherData


