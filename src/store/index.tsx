import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { maskmakerApi } from './maskmakerApi';

export const store = configureStore({
    reducer: {
        [maskmakerApi.reducerPath]: maskmakerApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(maskmakerApi.middleware)
    }
});

setupListeners(store.dispatch);

export { useFetchHealthQuery, useGetCharacterMutation } from './maskmakerApi'