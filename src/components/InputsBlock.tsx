import { useSelector, useDispatch } from "react-redux"
import { SetStateAction, useState } from "react";
import { useGetCharacterMutation } from "../store";
import Select from "react-select";
import { setCharacter } from "../store"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons'

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
        var split_atts = attributes.split(',').map(s => s.trim())
        const requestBody = {
            number: 1,
            ...(gender != "" && {gender}),
            ...(region != "" && {region}),
            ...(attributes != "" && {attributes: split_atts})
        }
        const { data } = await getCharacter(requestBody)
        dispatch(setCharacter(data.characters[0]))
    }

    const attributeValidationRegex = /^\w*(?:, ?\w+)*$/
    const attributeStringValid = attributeValidationRegex.test(attributes)
    const attributeCheckIcon = attributeStringValid ? <FontAwesomeIcon icon={faSquareCheck} size="lg" /> : <FontAwesomeIcon icon={faSquareXmark} size="lg" />


    // AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IN, IR, MX, NL, NO, NZ, RS, TR, UA, US
    const regionOptions = [
        {value: "AU", label: "Australia"},
        {value: "BR", label: "Brazil"},
        {value: "CA", label: "Canada"},
        {value: "DK", label: "Denmark"},
        {value: "FI", label: "Finland"},
        {value: "FR", label: "France"},
        {value: "DE", label: "Germany"},
        {value: "GB", label: "Great Britain"},
        {value: "IE", label: "Ireland"},
        {value: "IN", label: "India"},
        {value: "IR", label: "Iran"},
        {value: "MX", label: "Mexico"},
        {value: "NL", label: "The Netherlands"},
        {value: "NO", label: "Norway"},
        {value: "NZ", label: "New Zealand"},
        {value: "RS", label: "Russia"},
        {value: "ES", label: "Spain"},
        {value: "CH", label: "Switzerland"},
        {value: "TR", label: "Turkiye"},
        {value: "UA", label: "Ukraine"},
        {value: "US", label: "United States"},
    ]

    const customStyles = {
        option: (provided: any) => ({
          ...provided,
          color: 'black'
        }),
        control: (provided: any) => ({
          ...provided,
          color: 'black'
        }),
        singleValue: (provided: any) => ({
          ...provided,
          color: 'black'
        })
      }

    const regionSelect = (<Select className="text-black" styles={customStyles} defaultValue={regionOptions[0].value} options={regionOptions} onChange={handleSetRegion}/>)

    // male, female
    const genderOptions = [
        {value: "male", label: "Male"},
        {value: "female", label: "Female"}
    ]

    const genderSelect = (<Select className="text-black" styles={customStyles} defaultValue={genderOptions[0].value} options={genderOptions} onChange={handleSetGender}/>)

    return (<div className="font-nunito">
        <div className="font-varela-round text-2xl">Character Generation Options</div>
        <form onSubmit={handleSubmit}>
            <div className="text-xl">Nationality</div>
            <div>{regionSelect}</div> <br/>
            <div className="text-xl">Sex</div>
            <div>{genderSelect}</div> <br />
            <div className="text-xl">Custom Attributes</div>
            <div>Please use a comma-separated string</div>
            <input value={attributes} onChange={handleAttributesChange}/>    {attributeCheckIcon} <br/><br/>
            <button type="submit" disabled={isLoading}>Generate A Character</button>
        </form>
            
    </div>)
}

export default InputsBlock;