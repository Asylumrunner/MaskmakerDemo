import { createSlice } from "@reduxjs/toolkit";

const generatedDataSlice = createSlice({
    name: "generatedData",
    initialState: {
        markovChain: null,
        character: null
    },
    reducers: {
        setMarkovChain(state, action) {
            var { chain } = action.payload
            state.markovChain = chain
        },
        setCharacter(state, action) {
            state.character = action.payload
        }
    }
});

export const { setMarkovChain, setCharacter } = generatedDataSlice.actions
export const generatedDataReducer = generatedDataSlice.reducer