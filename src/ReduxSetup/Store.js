import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import {persistStore,persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import UserSlice from "./UserSlice";

const persistConfig={
    key:"root",
    storage
}
const persistedReducer=persistReducer(persistConfig,UserSlice)
export const store=configureStore({
    reducer:persistedReducer
})
export const persitor=persistStore(store)