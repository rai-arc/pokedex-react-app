const axios = require("axios");
const baseUrl = "https://pokeapi.co/api/v2/pokemon-species/";

/*
Gets one random pokemon's data
Filters flavor text data to only English
Returns one random flavor text entry
*/

async function GetRandomEntry(cap = 898) {
    // if (cap < 1 || cap > 898 || isNaN(cap)) {
    //   console.log("Please choose a number from 1 to 898 or leave blank!");
    //   return "Please choose a number from 1 to 898 or leave blank!";
    // } else {
    //   try {const {data} = await axios.get(`${baseUrl}/${Math.floor(Math.random() * cap + 1)}`)
    //       const allFlavor = data.flavor_text_entries;
    //       const englishList = allFlavor.filter((entry) => entry.language.name === "en");
    //       const randomEntry = englishList[Math.floor(Math.random() * englishList.length)];
    //       const result = <p>{randomEntry.flavor_text}</p>;
    //       console.log(result);
    //       return result;}
    //   catch(error){
    //       const message = <p>"Oops! Something went wrong!"</p>
    //       console.log(message);
    //       return message;
    //     };
    // }
  }

export default GetRandomEntry