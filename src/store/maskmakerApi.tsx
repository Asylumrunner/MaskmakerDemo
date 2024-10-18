import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const maskmakerApi = createApi({
    reducerPath: 'maskmaker',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://9e6c101q26.execute-api.us-east-1.amazonaws.com/latest/api',
        credentials: "same-origin", 
    }),
    endpoints(builder) {
        return {
            fetchHealth: builder.query({
                query: () => {
                    return {
                        url: '/health',
                        method: 'GET'
                    }
                },

            }),
            getCharacter: builder.mutation({
                query: (body) => {
                    return {
                        url: '/npcs',
                        method: 'POST',
                        body
                    }
                }
            }),
            getCharacterCustomName: builder.mutation({
                query: (body) => {
                    return {
                        url: '/npcs/custom-names',
                        method: 'POST',
                        body
                    }
                }
            })
        }
    }
});

export const { useFetchHealthQuery, useGetCharacterMutation, useGetCharacterCustomNameMutation } = maskmakerApi
export { maskmakerApi }