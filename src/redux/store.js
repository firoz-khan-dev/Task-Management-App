import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "./DetailsSlice";
import statusReducer from "./statusSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    details: detailsReducer,
    status: statusReducer,
    filter: filterReducer,
  },
});