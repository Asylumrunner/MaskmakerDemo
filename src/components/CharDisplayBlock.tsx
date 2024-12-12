import CharacterCard from "./CharacterCard";
import { useSelector } from "react-redux"

function CharDisplayBlock() {
    const character = useSelector((state: any) => {
        return state.generatedData.character
    })

    return (<div>
        {character && <CharacterCard char={character}/>}
    </div>)
}

export default CharDisplayBlock;