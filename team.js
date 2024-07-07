async function fetchPokemon(input) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await response.json()
    return data;
}

function createTeamCard() {
    // Creating HTML Elements
    // Card
    let mainCard = document.createElement("div");
    mainCard.setAttribute("class", "card m-1")
    mainCard.style.minWidth = "150px";
    // Form
    let formContainer = document.createElement("form");
    let searchField = document.createElement("input");
    searchField.setAttribute("class", "form-control");
    searchField.setAttribute("placeholder", "Search here");
    let buttonHolder = document.createElement("div");
    buttonHolder.setAttribute("class", "d-flex")
    let searchButton = document.createElement("button");
    searchButton.setAttribute("class", "form-control button bg-success")
    searchButton.innerText = "Add";
    let resetButton = document.createElement("button");
    resetButton.setAttribute("class", "form-control button bg-danger")
    resetButton.innerText = "Remove";
    // img
    let imgHolder = document.createElement("img");
    imgHolder.setAttribute("class", "card-img-top");
    imgHolder.style.minWidth = "150px";
    imgHolder.style.height = "auto";
    // Content Cody
    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "card-body")
    // Title(Name)
    let pokeName = document.createElement("h3");
    pokeName.innerText = "Search!"
    // Whatever Else Pokemon Info
    let infoDiv = document.createElement("div")
    infoDiv.setAttribute("class", "card-text");

    // Adding Event listeners
    searchButton.addEventListener("click", async (event) => {
        event.preventDefault();
        const searchValue = searchField.value;
        try {
            const pokeData = await fetchPokemon(searchValue);
            imgHolder.setAttribute("src", pokeData["sprites"]["front_default"]);
            pokeName.innerText = pokeData["name"][0].toUpperCase() + pokeData["name"].slice(1);
            infoDiv.innerText = ""
            pokeData.types.forEach((type) => {
                if (infoDiv.innerText) {
                    infoDiv.innerText += `, ${type.type.name}`
                } else {
                    infoDiv.innerText = `Types: ${type.type.name}`
                }
            });
        } catch (error) {
            infoDiv.innerText = "Pokemon Not Found!";
        }
    });
    resetButton.addEventListener("click", (event) => {
        event.preventDefault();
        imgHolder.setAttribute("src", "");
        pokeName.innerText = "Search!";
        searchField.value = "";
        infoDiv.innerText = "";
    });

    // Nesting
    // Form
    formContainer.appendChild(searchField);
    formContainer.appendChild(buttonHolder);
    buttonHolder.appendChild(searchButton);
    buttonHolder.appendChild(resetButton);
    // Card
    mainCard.appendChild(formContainer);
    mainCard.appendChild(imgHolder);
    mainCard.appendChild(cardContent);
    cardContent.appendChild(pokeName);
    cardContent.appendChild(infoDiv);

    return mainCard;
};

function populateTeamLayout() {
    let container = document.getElementById("teamContainer");
    for (let count = 6; count > 0; count--) {
        let card = createTeamCard();
        container.appendChild(card);
    }
};

document.addEventListener("DOMContentLoaded", populateTeamLayout);