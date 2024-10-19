import { useSelector, useDispatch } from "react-redux";
import { setCharacter, useGetCharacterMutation } from "../store";
import CharacterCard from "./CharacterCard";

function CharDisplayBlock() {
    console.log("I AM RERENDERING")
    const dispatch = useDispatch()

    const [getCharacter, {isLoading}] = useGetCharacterMutation()
    
    const character = useSelector((state) => {
        return state.character
    });

    console.log(character)

    let requestBody = {
        number: 1
    }

    const handleGetCharacterSubmit = async (event) => {
        event.preventDefault()
        const { data } = await getCharacter(requestBody)
        dispatch(setCharacter(data.characters[0]))
    }

    return (<div>
        {character && <CharacterCard />}
        <button onClick={handleGetCharacterSubmit} disabled={isLoading}>Create Character</button>
    </div>)
}

export default CharDisplayBlock;