import { useSelector, useDispatch } from "react-redux"
import { SetStateAction, useState } from "react";
import Select from "react-select";
import { setRegion, setAttributes, setListOfNames, setGender, RootState } from "../store"

function InputsBlock() {
    const dispatch = useDispatch()
    const [nameInput, setNameInput] = useState("")
    const [attributeInput, setAttributeInput] = useState("")
    const { settings } = useSelector((state: RootState) => {
        return state.generatedData.settings
    })

    const handleNamesChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        var input: any = event.target.value
        setNameInput(input)
        dispatch(setListOfNames(input.split(',')))
    }

    const handleSetRegion = (option: any) => {
        dispatch(setRegion(option.value))
    }

    const handleAttributesChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        var input: any = event.target.value
        setAttributeInput(input)
        dispatch(setAttributes(input.split(',')))
    }

    const handleSetGender = (option: any) => {
        dispatch(setGender(option.value))
    }


    // AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IN, IR, MX, NL, NO, NZ, RS, TR, UA, US
    const regionOptions = [
        {value: "AU", label: "Australia"},
        {value: "BR", label: "Brazil"},
        {value: "CA", label: "Canada"},
        {value: "CH", label: "Switzerland"},
        {value: "DE", label: "Germany"},
        {value: "DK", label: "Denmark"},
        {value: "ES", label: "Spain"},
        {value: "FI", label: "Finland"},
        {value: "FR", label: "France"},
        {value: "GB", label: "Great Britain"},
        {value: "IE", label: "Ireland"},
        {value: "IN", label: "India"},
        {value: "IR", label: "Iran"},
        {value: "MX", label: "Mexico"},
        {value: "NL", label: "The Netherlands"},
        {value: "NO", label: "Norway"},
        {value: "NZ", label: "New Zealand"},
        {value: "RS", label: "Russia"},
        {value: "TR", label: "Turkiye"},
        {value: "UA", label: "Ukraine"},
        {value: "US", label: "United States"},
    ]

    const regionSelect = (<Select className="text-black" defaultValue={regionOptions[0].value} options={regionOptions} onChange={handleSetRegion}/>)

    // male, female
    const genderOptions = [
        {value: "male", label: "Male"},
        {value: "female", label: "Female"}
    ]

    const genderSelect = (<Select className="text-black" defaultValue={genderOptions[0].value} options={genderOptions} onChange={handleSetGender}/>)

    return (<div>
        <div>{regionSelect}</div> <br/>
        <div>{genderSelect}</div> <br />
        <input value={nameInput} onChange={handleNamesChange}/> <br />
        <input value={attributeInput} onChange={handleAttributesChange}/> <br/>
        <p>A button to generate a markov chain based on that list of names</p>
        <p>A button to autopopulate the input field with sample names so people don't have to do it themselves</p>
        <p>Some sort of indicator that the markov chain has been created</p>
    </div>)
}

export default InputsBlock;