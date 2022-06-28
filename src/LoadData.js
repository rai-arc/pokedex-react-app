import React, {useState, useEffect} from "react";
const axios = require("axios");

function LoadData({setPokemon, setDisplay}){
    
    const [name, setName] = useState("");
    const [term, setTerm] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        async function loadData() {
            try {if(name==="") return;
            else {
                let searchTerm = ""
                if (isNaN(name)){
                    searchTerm = name.toLowerCase();
                }else{
                    searchTerm = name}
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${searchTerm}`);
            setPokemon(response);
            setError("")}}
            catch(error) { 
                setError("Invalid Pokemon or Number!")
                console.error(error.message);}
        }
        loadData();
    }, [name, setPokemon]);

    const handleNameChange = (event) => setTerm(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();
        setName(term);
    }

    const randomizeHandler = (event) => {
        event.preventDefault();
        setName(Math.floor(Math.random() * 898 + 1))    ;
    }

    return <>
        <form  onSubmit={submitHandler}>
        <input required name="name"  placeholder="Input Pokemon name or number" onChange={handleNameChange}></input>
        <button name="submit">Submit</button> 
        </form>
        <button name="randomize" onClick={randomizeHandler}>Randomize</button>
        <label>
        <input type="checkbox" onChange={ (e) => setDisplay(e.target.checked)}/>
        Single Random Entry
        </label>
        <p>{error}</p>
        </>

}

export default LoadData