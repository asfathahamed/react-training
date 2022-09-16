import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Coordinates,
  IWeatherFull,
  WeatherState,
} from "../../models/weather.type";
import { fetchWeather } from "../api/weatherAPI";
import { RootState } from "../store";

const initialState: WeatherState = {
  data: {},
  status: "idle",
};

export const fetchWeatherAsync = createAsyncThunk(
  "weather/fetchWeather",
  async (parameter: Coordinates) => {
    const response = await fetchWeather(parameter);
    return response;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(fetchWeatherAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const weatherList = (state: RootState) => state.weather.data.dataseries;

export default weatherSlice.reducer;
