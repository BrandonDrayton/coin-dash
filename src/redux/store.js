import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { cryptoCoinsApi } from '../services/cryptoCoinsApi'
import { cryptoExchangeApi } from '../services/cryptoExchangesApi'
import { cryptoGlobalApi } from '../services/cryptoGlobalApi'
import { watchlistReducer } from './reducers'


export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [cryptoGlobalApi.reducerPath]: cryptoGlobalApi.reducer,
        [cryptoExchangeApi.reducerPath]: cryptoExchangeApi.reducer,
        [cryptoCoinsApi.reducerPath]: cryptoCoinsApi.reducer,
        watchlistReducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoGlobalApi.middleware),

})


setupListeners(store.dispatch)