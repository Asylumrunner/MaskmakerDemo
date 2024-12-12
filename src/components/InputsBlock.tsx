import { useSelector, useDispatch } from "react-redux"
import { SetStateAction, useState } from "react";
import { useGetCharacterMutation } from "../store";
import Select from "react-select";
import { setCharacter } from "../store"

function InputsBlock() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [attributes, setAttributes] = useState("")
    const [gender, setGender] = useState("")
    const [region, setRegion] = useState("")
    const [getCharacter, {isLoading}] = useGetCharacterMutation()

    const handleNamesChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        var input: any = event.target.value
        setName(input)
    }

    const handleSetRegion = (option: any) => {
        setRegion(option.value)
    }

    const handleAttributesChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        var input: any = event.target.value
        setAttributes(input)
    }

    const handleSetGender = (option: any) => {
        setGender(option.value)
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        var split_atts = attributes.split(',')
        const requestBody = {
            number: 1,
            ...(gender != "" && {gender}),
            ...(region != "" && {region}),
            ...(attributes != "" && {split_atts})
        }
        const { data } = await getCharacter(requestBody)
        dispatch(setCharacter(data.characters[0]))
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
        <form onSubmit={handleSubmit}>
            <div>{regionSelect}</div> <br/>
            <div>{genderSelect}</div> <br />
            <input value={attributes} onChange={handleAttributesChange}/> <br/>
            <input value={name} onChange={handleNamesChange}/> <br />
            <p>A button to generate a markov chain based on that list of names</p>
            <p>A button to autopopulate the input field with sample names so people don't have to do it themselves</p>
            <p>Some sort of indicator that the markov chain has been created</p>
            <button type="submit" disabled={isLoading}>Generate A Character</button>
        </form>
    </div>)
}

export default InputsBlock;