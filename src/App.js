import "./App.css";
import React, {useState} from "react";
import LoadData from "./LoadData";
import DisplayData from "./DisplayData";


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [display, setDisplay] = useState(false);
  return <>
  <LoadData pokemon = {pokemon} setPokemon = {setPokemon} setDisplay = {setDisplay}/>
  <DisplayData pokemon = {pokemon} display={display}/>
  </>
  
}

export default App;