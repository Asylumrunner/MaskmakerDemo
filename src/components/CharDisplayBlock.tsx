import { useState } from "react";
import { useGetCharacterMutation } from "../store";
import CharacterCard from "./CharacterCard";

function CharDisplayBlock() {

    const [getCharacter, {isLoading}] = useGetCharacterMutation()
    var [character, setCharacter] = useState(null);

    let requestBody = {
        number: 1
    }

    const handleGetCharacterSubmit = async (event) => {
        event.preventDefault()
        const { data } = await getCharacter(requestBody)
        setCharacter(data.characters[0])
    }

    return (<div>
        {character && <CharacterCard char={character}/>}
        <button onClick={handleGetCharacterSubmit} disabled={isLoading}>Create Character</button>
    </div>)
}

export default CharDisplayBlock;