import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// show all countries
export const showAllCountries = createAsyncThunk("countries/showAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        return response.data;
    } catch (error) {
        const message = (error.response.data && error.response) || error.message;

        // rejectWithValue sends the error message as a payload
        return thunkAPI.rejectWithValue(message);
    }
});

// search by cioc code
export const searchByCode = createAsyncThunk("countries/searchByCode", async(code, thunkAPI) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
        return response.data;
    } catch (error) {
        const message = (error.response.data && error.response) || error.message;

        // rejectWithValue sends the error message as a payload
        return thunkAPI.rejectWithValue(message);
    }
});

// Search by region
export const searchByRegion = createAsyncThunk("coumtries/searchByregion", async (region, thunkAPI) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);

        return response.data;
    } catch (error) {
        const message = (error.response.data && error.response) || error.message;

        // rejectWithValue sends the error message as a payload
        return thunkAPI.rejectWithValue(message);
    }
})