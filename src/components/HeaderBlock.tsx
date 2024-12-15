import * as content from "../assets/raw_text.json"

function HeaderBlock() {

    return (<div className="mb-10 font-nunito">
        <h1 className="font-varela-round">{content.header}</h1>
        <p>{content.subheader}</p>
        <br/>
        <p>{content.block_text_1}</p>
        <br/>
        <p>{content.block_text_2}</p>
        <p>To see the guts of Maskmaker, and the documentation, check out <a href={content.github_link} target="_blank">the Github repo</a>!</p>
    </div>)
}

export default HeaderBlock;