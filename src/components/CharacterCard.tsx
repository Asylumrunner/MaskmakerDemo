function CharacterCard({char}) {

    const traits = char.traits.map((trait) => {
        return (<div key={trait}>{trait}</div>)
    })

    const attr = Object.keys(char.attribute).map((att) => {
        return (<div key={att}>{att}: {char.attribute[att]}</div>)
    })
    return (<div>
        <p className="text-2xl">{char.name}</p>
        <br />
        <div>{traits}</div>
        <br />
        <div>{attr}</div>
    </div>)
}

export default CharacterCard