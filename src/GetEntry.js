const axios = require("axios");
const baseUrl = "https://pokeapi.co/api/v2/pokemon-species/";

/*
Gets pokemon data based on pokeName
Filters flavor text data to only English
Returns one random flavor text entry
*/

async function GetEntry(pokeName) {
    // if (typeof pokeName == "number") pokeName.toString();
    // if (typeof pokeName == "string") pokeName = pokeName.toLowerCase();
  
    // try {const {data} = await axios.get(`${baseUrl}/${pokeName}`)
    // const allFlavor = data.flavor_text_entries;
    // const englishList = allFlavor.filter((entry) => entry.language.name === "en");
    // const randomEntry = englishList[Math.floor(Math.random() * englishList.length)];
    // const result = randomEntry.flavor_text;
    // console.log(result);
    // return result; }
    //   catch (error) {
    //       const message = ("Please use a valid Pokemon name or National Pokedex number!")
    //       console.log(message)
    //       return message;
    //   }
  }

export default GetEntry