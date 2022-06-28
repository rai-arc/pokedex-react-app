import React from "react"

function DisplayData ({pokemon, display}) {
    console.log(pokemon)
    console.log(display)
    let searchResult = ""
    let entryResult = []


    if(pokemon.data){
        searchResult = pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1);
        const allFlavor = pokemon.data.flavor_text_entries;
        const englishList = allFlavor.filter((entry) => entry.language.name ==="en");
    if(!display){
        entryResult = englishList.map((entry, index) => {
        return (<div key={index}><p>{entry.flavor_text}</p> <p>From: {entry.version.name.charAt(0).toUpperCase() + entry.version.name.slice(1)} </p> <br></br></div>)})
    }else{
        const randomEntry = englishList[Math.floor(Math.random() * englishList.length)];
        entryResult = (<div><p>{randomEntry.flavor_text}</p> <p>From: {randomEntry.version.name.charAt(0).toUpperCase() + randomEntry.version.name.slice(1)}</p></div>)
    }
}    
    return <><h2>{searchResult}</h2>
    {entryResult}</>

}

export default DisplayData