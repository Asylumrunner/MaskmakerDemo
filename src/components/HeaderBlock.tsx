import * as content from "../assets/raw_text.json"

function HeaderBlock() {

    return (<div>
        <p>{content.header}</p>
        <p>{content.subheader}</p>
        <p>{content.block_text_1}</p>
        <p>{content.block_text_2}</p>
        <p>To see the guts of Maskmaker, check out <a href={content.github_link} target="_blank">the Github repo</a>!</p>
    </div>)
}

export default HeaderBlock;