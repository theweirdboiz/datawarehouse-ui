import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import weatherSlice from './weatherSlice';
import {fork} from 'redux-saga/effects'
import { weatherSaga } from './weatherSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: {
        weather: weatherSlice,
    },
    middleware
});

sagaMiddleware.run(weatherSaga);

export default store;