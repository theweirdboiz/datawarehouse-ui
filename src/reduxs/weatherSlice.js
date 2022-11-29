import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weathers: [],
    weather: undefined,
    loading: false,
    now: new Date()
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        startLoadWeathers: (state) => {
            return {
                ...state,
                loading: true
            };
        },
        endLoadWeathers: (state, action) => {
            return {
                ...state,
                weathers: action.payload,
                loading: false
            };
        },
        setWeather: (state, action) => {
            return {
                ...state,
                weather: action.payload
            };
        },
        updateDateNow: (state) => {
            return {
                ...state,
                now: new Date()
            };
        }
    }
});

export const {startLoadWeathers,endLoadWeathers, setWeather, updateDateNow} = weatherSlice.actions;
export default weatherSlice.reducer;