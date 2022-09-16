import { Coordinates, IWeatherFull } from "../../models/weather.type";

const defaultCoordinates: Coordinates = { longitude: 113.17, latitude: 23.09 };

export function fetchWeather(defaultCoordinates: Coordinates) {
  const { longitude, latitude } = defaultCoordinates;
  return fetch(
    `http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civil&output=json`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => data);
}
