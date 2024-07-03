let queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
let queries = queryString.split('=');
let pokemonName = queries[1];

async function fetchPokemon(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json()
    return data;
}

async function loadPokemonDetails(pokemonName) {
    // getting pokemon data passed in as paramter in url from wherever
    const pokeData = await fetchPokemon(pokemonName);
    // Building HTML Elements for display
    // Card Container
    let pokeCard = document.createElement("div");
    pokeCard.setAttribute("class", "card");
    pokeCard.setAttribute("id", "pokeCard");
    pokeCard.style.minWidth = "150px"
    // Card Img
    let pokeImg = document.createElement("img");
    pokeImg.setAttribute("class", "card-img-top");
    pokeImg.setAttribute("id", "pokeImg");
    // Card Body
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "cardBody");
    // Name Link
    let cardName = document.createElement("h1");

    // Nesting Elements
    pokeCard.appendChild(pokeImg);
    pokeCard.appendChild(cardBody);
    cardBody.appendChild(cardName);

    // Placing pokemon data in card
    pokeImg.setAttribute("src", pokeData["sprites"]["front_default"]);
    cardName.innerText = pokeData["name"][0].toUpperCase() + pokeData["name"].slice(1);

    // Placing Card in document
    let content = document.getElementById("detailsContent");
    content.appendChild(pokeCard);
};

document.addEventListener("DOMContentLoaded", loadPokemonDetails(pokemonName));