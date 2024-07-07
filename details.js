// Parse passed in parameter in URL to determine what pokemon name to display
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
    pokeCard.setAttribute("class", "card p-3");
    pokeCard.setAttribute("id", "pokeCard");
    // Card Img
    let pokeImg = document.createElement("img");
    pokeImg.setAttribute("class", "card-img-top");
    pokeImg.setAttribute("id", "pokeImg");
    pokeImg.style.width = "150px"
    // Card Body
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "cardBody");
    // Name
    let cardName = document.createElement("h1");

    // Nesting Elements
    pokeCard.appendChild(pokeImg);
    pokeCard.appendChild(cardBody);
    cardBody.appendChild(cardName);

    // Placing Card in document
    let content = document.getElementById("detailsContent");
    content.appendChild(pokeCard);

    // Placing pokemon data in card
    pokeImg.setAttribute("src", pokeData["sprites"]["front_default"]);
    cardName.innerText = pokeData["name"][0].toUpperCase() + pokeData["name"].slice(1);

    // Type info
    let typeDiv = document.createElement("div");
    let typeTitle = document.createElement("h4");
    typeTitle.innerText = "Types:"
    let typeInfo = document.createElement("p");
    typeInfo.innerText = ""
    pokeData.types.forEach((type) => {
        if (typeInfo.innerText) {
            typeInfo.innerText += `, ${type.type.name}`;
        } else {
            typeInfo.innerText = type.type.name;
        };
    });
    typeDiv.appendChild(typeTitle);
    typeDiv.appendChild(typeInfo);
    cardBody.appendChild(typeDiv);

    // Ability info
    let abilityDiv = document.createElement("div");
    let abilityTitle = document.createElement("h4");
    abilityTitle.innerText = "Possible Abilities:"
    let abilityInfo = document.createElement("p");
    pokeData.abilities.forEach((ability) => {
        if (abilityInfo.innerText) {
            abilityInfo.innerText += `, ${ability.ability.name}`;
        } else {
            abilityInfo.innerText = ability.ability.name;
        };
    });
    abilityDiv.appendChild(abilityTitle);
    abilityDiv.appendChild(abilityInfo);
    cardBody.appendChild(abilityDiv);

    // Move info
    let moveDiv = document.createElement("div");
    let moveTitle = document.createElement("h4");
    moveTitle.innerText = "Possible Moves:"
    let moveInfo = document.createElement("p");
    pokeData.moves.forEach((move) => {
        if (moveInfo.innerText) {
            moveInfo.innerText += `, ${move.move.name}`;
        } else {
            moveInfo.innerText = move.move.name;
        };
    });
    moveDiv.appendChild(moveTitle);
    moveDiv.appendChild(moveInfo);
    cardBody.appendChild(moveDiv);
};

document.addEventListener("DOMContentLoaded", loadPokemonDetails(pokemonName));