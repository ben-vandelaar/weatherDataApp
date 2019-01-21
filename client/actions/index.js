import request from "superagent";

export const receiveData = data => {
  return {
    type: "WEATHER_DATA",
    data: data.text
  };
};

export function getWeather() {
  return dispatch => {
    return request
      .get("/api/weather")
      .then(res => {
        dispatch(receiveData(res));
      })
      .then()
      .catch(() => {
        throw Error("Your API route is broken");
      });
  };
}
