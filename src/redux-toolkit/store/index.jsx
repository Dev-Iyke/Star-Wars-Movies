import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "../slices/AuthenticationSlice";
import {WebStorage, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage";

export const persistConfiguration = {
    key: 'root',
    storage: storage,
}

const rootReducer = combineReducers({
    auth: AuthenticationSlice
});

const persistedReducer = persistReducer(persistConfiguration, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});