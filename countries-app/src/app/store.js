import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../features/countries/countriesSlice";

export const store = configureStore({
    reducer: {
        country: countryReducer,
    }
})