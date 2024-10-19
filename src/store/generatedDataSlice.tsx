import { createSlice } from "@reduxjs/toolkit";

const generatedDataSlice = createSlice({
    name: "generatedData",
    initialState: {
        character: null,
        options: {
            markovChain: null,
            settings: {
                region: "",
                gender: "",
                attributes: "",
                listOfNames: ""
            }
        }   
    },
    reducers: {
        setCharacter(state, action) {
            state.character = action.payload
            console.log(state.character)
        },
        setMarkovChain(state, action) {
            var { chain } = action.payload
            state.options.markovChain = chain
        },
        setRegion(state, action) {
            state.options.settings.region = action.payload
        },
        setGender(state, action) {
            state.options.settings.gender = action.payload
        },
        setAttributes(state, action) {
            state.options.settings.attributes = action.payload
        },
        setListOfNames(state, action) {
            state.options.settings.listOfNames = action.payload
        }
    }
});

export const { setMarkovChain, setCharacter, setRegion, setGender, setAttributes, setListOfNames } = generatedDataSlice.actions
export const generatedDataReducer = generatedDataSlice.reducer