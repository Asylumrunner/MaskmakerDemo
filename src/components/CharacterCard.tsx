function CharacterCard({char}) {

    const traits = char.traits.map((trait) => {
        return (<div key={trait}>{trait}</div>)
    })

    const attr = Object.keys(char.attribute).map((att) => {
        return (<div key={att}>{att}: {char.attribute[att]}</div>)
    })
    return (<div className="font-nunito font-semibold bg-card-red mr-40 p-16 rounded-3xl">
        <p className="text-4xl font-varela-round">{char.name}</p>
        <br />
        <div>{traits}</div>
        <br />
        <div>{attr}</div>
    </div>)
}

export default CharacterCard