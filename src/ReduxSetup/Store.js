import { configureStore,applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import {persistStore,persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import UserSlice from "./UserSlice";
import ActiveComponentSlice from "./ActiveComponentSlice";


const persistConfig={
    key:"root",
    storage
}
const rootreducer=combineReducers({
    user:UserSlice,
    activecomponent:ActiveComponentSlice
})
const persistedReducer=persistReducer(persistConfig,rootreducer)
export const store=configureStore({
    reducer:persistedReducer
})
export const persitor=persistStore(store)