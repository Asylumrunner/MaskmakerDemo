import { createSlice } from "@reduxjs/toolkit";

const generatedDataSlice = createSlice({
    name: "generatedData",
    initialState: {
        markovChain: null,
        settings: {
            region: "",
            gender: "",
            attributes: "",
            listOfNames: ""
        }
    },
    reducers: {
        setMarkovChain(state, action) {
            var { chain } = action.payload
            state.markovChain = chain
        },
        setRegion(state, action) {
            state.settings.region = action.payload
        },
        setGender(state, action) {
            state.settings.gender = action.payload
        },
        setAttributes(state, action) {
            state.settings.attributes = action.payload
        },
        setListOfNames(state, action) {
            state.settings.listOfNames = action.payload
        }
    }
});

export const { setMarkovChain, setRegion, setGender, setAttributes, setListOfNames } = generatedDataSlice.actions
export const generatedDataReducer = generatedDataSlice.reducer