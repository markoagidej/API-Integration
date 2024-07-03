let typeCollection = [];

async function getTypeData() {
    // getting count limit
    let url = `https://pokeapi.co/api/v2/type?limit=1`
    const countResponse = await fetch(url);
    const countData = await countResponse.json();
    const count = countData["count"];
    // making request for all types
    url = url.slice(0, -1) + count;
    const response = await fetch(url);
    const data = await response.json();
    return data["results"];
}

async function fetchPokemon(pokeURL) {
    const response = await fetch(pokeURL);
    const data = await response.json();
    return data;
}

function createPokeCard(pokeName) {
    // Creating card elements
    // Card Container
    let pokeCard = document.createElement("div");
    pokeCard.setAttribute("class", "card p-2");
    pokeCard.setAttribute("id", "pokeCard");
    pokeCard.style.minWidth = "150px";
    // Card Body
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "cardBody");
    // Name Link
    let cardName = document.createElement("a");

    // Nesting Elements
    pokeCard.appendChild(cardBody);
    cardBody.appendChild(cardName);

    // Placing pokemon data in card
    cardName.innerText = pokeName[0].toUpperCase() + pokeName.slice(1);
    
    // Collect pokemon name listener and pass it into details page as URL parameter
    pokeCard.addEventListener('click', function(element) {
        let pokemonName = element.target.innerText.toLowerCase();
        let queryString = "?para1=" + pokemonName;
        window.location.href = 'details.html' + queryString;
    });

    return pokeCard;
}

async function createItemContents(typeURL) {
    // getting pokemon of a type list
    let response = await fetch(typeURL);
    let typeData = await response.json();
    let pokemonList = typeData["pokemon"];
    // Creating container for all pokemon cards
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "d-flex flex-wrap");
    // Populating type container with all pokemon
    pokemonList.forEach(async(element) => {
        let card = createPokeCard(element["pokemon"]["name"]);
        cardContainer.appendChild(card)
    });
    return cardContainer;
}

async function createAccordionItem(typeData, count) {
    // Element creation
    // Item Wrapper
    let item = document.createElement("div");
    item.setAttribute("class", "accordion-item");
    // Header
    let header = document.createElement("h2");
    header.setAttribute("class", "accordion-header");
    header.setAttribute("id", `heading${count}`);
    // Button
    let button = document.createElement("button");
    button.setAttribute("class", "accordion-button");
    button.setAttribute("id", "accordionButton");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", `#collapse${count}`);
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-controls", `collapse${count}`);
    button.innerText = typeData["name"][0].toUpperCase() + typeData["name"].slice(1);
    // Collapser
    let collapser = document.createElement("div");
    collapser.setAttribute("id", `collapse${count}`);
    collapser.setAttribute("class", "accordion-collapse collapse");
    collapser.setAttribute("aria-labelledby", `heading${count}`);
    collapser.setAttribute("data-bs-parent", "#pokeCcordion");
    // Body
    let innerBody = document.createElement("div");
    innerBody.setAttribute("class", "accordion-body");
    let contents = await createItemContents(typeData["url"]);
    innerBody.appendChild(contents);
    
    // Nesting elements
    item.appendChild(header);
    header.appendChild(button);
    item.appendChild(collapser);
    collapser.appendChild(innerBody);

    return item;
}

async function createAccordion() {
    // Creating base element
    let accordion = document.createElement("div");
    accordion.setAttribute("class", "accordion");
    accordion.setAttribute("id", "pokeCcordion");

    // Creating and adding item for every Type in results
    typeCollection = await getTypeData();
    let counter = 0;
    typeCollection.forEach(async(element) => {
        counter += 1;
        let item = await createAccordionItem(element, counter);
        accordion.appendChild(item);
    });

    // Adding Accordion Element to page
     document.getElementById("accordionHolder").appendChild(accordion);
}

document.addEventListener("DOMContentLoaded", createAccordion);