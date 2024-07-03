async function getGenerations() {
    let response = await fetch("https://pokeapi.co/api/v2/generation");
    const data = await response.json();
    return data["results"];
};

function createChkbx(generationName, count) {
    // Creating elements
    // Wrapper
    let chkItem = document.createElement("div");
    chkItem.setAttribute("class", "form-check m-3");
    // Interactable Input
    let chkInput = document.createElement("input");
    chkInput.setAttribute("class", "form-check-input");
    chkInput.setAttribute("type", "checkbox");
    chkInput.setAttribute("value", "");
    chkInput.setAttribute("id", `chkbx${count}`);
    // Label
    let chkLabel = document.createElement("label");
    chkLabel.setAttribute("class", "form-check-label");
    chkLabel.setAttribute("for", `chkbx${count}`);
    chkLabel.innerText = generationName.slice("generation-".length);

    // Nesting Elements
    chkItem.appendChild(chkInput);
    chkItem.appendChild(chkLabel);

    // listener??? Nah diverted to dedicated button for ease

    return chkItem;
};

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
};

async function pokemonInGeneration(generationName) {
    let response = await fetch(`https://pokeapi.co/api/v2/generation/${generationName}`);
    const data = await response.json();
    return data["pokemon_species"];
};

async function createGenerationCard(generationName) {
    // Getting list of pokemon in this generation
    let pokemonList = await pokemonInGeneration(generationName);
    // Creating HTML Elements
    let mainCard = document.createElement("div");
    mainCard.setAttribute("class", "card");

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let cardTitle = document.createElement("h3");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = generationName;

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "d-flex flex-wrap");

    // Nesting
    mainCard.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardContent);

    pokemonList.forEach((pokemon) => {
        let pokeCard = createPokeCard(pokemon.name);
        cardContent.appendChild(pokeCard);
    });

    return mainCard;
};

async function getCheckedGenerations(generationsList) {
    let generationsElement = document.createElement("div");
    generationsList.forEach(async(generationName) => {
        let generationElement = await createGenerationCard(generationName);
        generationsElement.appendChild(generationElement);
    });
    return generationsElement;
};

async function showPokemon(event) {
    event.preventDefault();
    // populate list of generations to display
    let generationsList = [];
    let chkbxs = document.getElementById("chkbxContainer").childNodes;
    chkbxs.forEach((chkboxItem) => {
        if (chkboxItem.children[0].checked) {
            generationsList.push("generation-" + chkboxItem.children[1].innerText);
        };
    });
    // overwrite any existing html
    document.getElementById("pokemonDisplay").innerHTML = "";
    // Display pokemon in each generation
    let generationsToDisplay = await getCheckedGenerations(generationsList);
    document.getElementById("pokemonDisplay").appendChild(generationsToDisplay);
};

async function populateForm() {
    let formWrapper = document.getElementById("generationSelectorForm");
    // Creating Title
    let title = document.createElement("h2");
    title.innerText = "Select Generations to View"
    // Creating checkbox container
    let chkbxContainer = document.createElement("div");
    chkbxContainer.setAttribute("id", "chkbxContainer");
    chkbxContainer.setAttribute("class", "d-flex flex-wrap");
    // Creating Checkbox for every generation
    const generationsCollection = await getGenerations();
    let counter = 0;
    generationsCollection.forEach(async(generation) => {
        counter += 1;
        let checkControl = createChkbx(generation["name"], counter);
        chkbxContainer.appendChild(checkControl);
    });
    // Creating button
    let showButton = document.createElement("button");
    showButton.setAttribute("class", "btn btn-primary");
    showButton.innerText = "Show Pokemon";
    showButton.addEventListener("click", showPokemon);

    // Nesting
    formWrapper.appendChild(title);
    formWrapper.appendChild(chkbxContainer);
    formWrapper.appendChild(showButton);
};

document.addEventListener("DOMContentLoaded", populateForm);