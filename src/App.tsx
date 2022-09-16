import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchWeatherAsync, weatherList } from "./redux/services/weatherSlice";
import { Coordinates, IWeather } from "./models/weather.type";

function App() {
  const weatherData = useAppSelector(weatherList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const myLocation: Coordinates = {
      longitude: 10.958721,
      latitude: 79.385975,
    };
    dispatch(fetchWeatherAsync(myLocation));
  }, []);
  console.log(weatherData);
  return (
    <div className="App">
      {weatherData ? (
        weatherData.map((item: IWeather) => {
          const { weather } = item;
          return weather;
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
