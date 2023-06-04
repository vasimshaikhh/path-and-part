import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { Api } from "../services/api";
import { Adminapi } from "../services/adminapi";
import { RiderApi } from "../services/riderapi";

export const store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
        [Adminapi.reducerPath]:Adminapi.reducer,
        [RiderApi.reducerPath]:RiderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(Api.middleware).concat(Adminapi.middleware).concat(RiderApi.middleware)
})

setupListeners(store.dispatch)