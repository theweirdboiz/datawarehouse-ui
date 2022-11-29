import { getDetailWeather, getWeather } from "./weatherAPIs";
import {put, takeEvery} from "redux-saga/effects";
import { endLoadWeathers, setWeather } from "./weatherSlice";
import weatherTypes from "./weatherTypes";

export function* handleGetWeathers(){
    const weathers = yield getWeather();
    yield put(endLoadWeathers(weathers));
}

export function* handleGetWeather(action){
    const weather = yield getDetailWeather(action.id);
    yield put(setWeather(weather));
}

export function* weatherSaga(){
    yield takeEvery(weatherTypes.GET_WEATHERS, handleGetWeathers);
    yield takeEvery(weatherTypes.GET_WEATHER, handleGetWeather);
}