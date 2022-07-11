// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const cryptoCoinsApi = createApi({
    reducerPath: 'cryptoCoinsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/' }),
    endpoints: (builder) => ({
        getCoinsStats: builder.query({
            query: (coinId) => `coins/${coinId}/?tickers=true&market_data=true`,
        }),
        getCoinsHistory: builder.query({
            query: ({ coinId, timePeriod }) => `coins/${coinId}/market_chart?vs_currency=usd&days=${timePeriod}&`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsStatsQuery, useGetCoinsHistoryQuery } = cryptoCoinsApi