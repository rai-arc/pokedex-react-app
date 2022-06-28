const axios = require("axios");
const baseUrl = "https://pokeapi.co/api/v2/pokemon-species/";

// Gets all English Pokedex entries for one Pokemon

async function GetAllEntries(pokeName) {
    // if (typeof pokeName == "number") pokeName.toString();
    // if (typeof pokeName == "string") pokeName = pokeName.toLowerCase();
  
    // try {const {data} = await axios.get(`${baseUrl}/${pokeName}`)
    //     const allFlavor = data.flavor_text_entries;
    //     const englishList = allFlavor.filter((entry) => entry.language.name === "en");
    //     const result = englishList.map((entry) => [entry.flavor_text,`From: ${entry.version.name}`,]);
    //     console.log(result);
    //     return result;}
    //   catch(error) {
    //       const message = "Please use a valid Pokemon name or National Pokedex number!"
    //       console.log(message);
    //       return <p>message</p>;
    //   }
  }

export default GetAllEntries