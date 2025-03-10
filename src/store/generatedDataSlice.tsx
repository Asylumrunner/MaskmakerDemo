import { createSlice } from "@reduxjs/toolkit";

const generatedDataSlice = createSlice({
    name: "generatedData",
    initialState: {
        markovChain: null,
        loading: false,
        character: null
    },
    reducers: {
        setMarkovChain(state, action) {
            var { chain } = action.payload
            state.markovChain = chain
        },
        setCharacter(state, action) {
            state.character = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        }
    }
});

export const { setMarkovChain, setCharacter, setLoading } = generatedDataSlice.actions
export const generatedDataReducer = generatedDataSlice.reducer