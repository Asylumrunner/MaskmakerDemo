import { useSelector } from "react-redux";
import { useGetCharacterMutation } from "../store";

function CharDisplayBlock() {
    
    const {generatedCharacter, settings, markovChain } = useSelector((state) => {
        return state
    })

    

    const content = (character != null) ?
        (<div>
            <p>{character.name}</p>
            <p>{character.traits}</p>
            <p>{character.attributes}</p>
        </div>) :
        (<div>I ain't got no character, fucker</div>)

    return (<div>
        {content}
        <button>Generate New Character</button>
    </div>)
}

export default CharDisplayBlock;