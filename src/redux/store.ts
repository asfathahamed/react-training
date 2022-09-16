import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./services/counterSlice";
import weatherReducer from "./services/weatherSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    weather: weatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
