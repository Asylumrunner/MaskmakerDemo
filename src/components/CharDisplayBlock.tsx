import CharacterCard from "./CharacterCard";
import { useSelector } from "react-redux"
import { Comment } from "react-loader-spinner";

function CharDisplayBlock() {
    const { character, isLoading } = useSelector((state: any) => {
        return {
            character: state.generatedData.character,
            isLoading: state.generatedData.loading
        }
    })

    console.log(isLoading)
    if (character && !isLoading) {
        return (<div>
            {character && <CharacterCard char={character}/>}
        </div>)
    } else if (isLoading) {
        return (<Comment
            visible={true}
            height="80"
            width="80"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#F4442E"
        />)
    } else {
        return <div></div>
    }
    
}

export default CharDisplayBlock;