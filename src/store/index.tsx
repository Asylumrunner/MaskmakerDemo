import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { maskmakerApi } from './maskmakerApi';
import { generatedDataReducer, setMarkovChain, setCharacter} from './generatedDataSlice';

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

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export { setMarkovChain, setCharacter }
export { useFetchHealthQuery, useGetCharacterMutation, useGetCharacterCustomNameMutation } from './maskmakerApi'