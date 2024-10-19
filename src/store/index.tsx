import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { maskmakerApi } from './maskmakerApi';
import { generatedDataReducer, setMarkovChain, setAttributes, setGender, setListOfNames, setRegion } from './generatedDataSlice';

export const store = configureStore({
    reducer: {
        [maskmakerApi.reducerPath]: maskmakerApi.reducer,
        generatedData: generatedDataReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(maskmakerApi.middleware)
    }
});

setupListeners(store.dispatch);

export { setMarkovChain, setAttributes, setGender, setListOfNames, setRegion }
export { useFetchHealthQuery, useGetCharacterMutation, useGetCharacterCustomNameMutation } from './maskmakerApi'