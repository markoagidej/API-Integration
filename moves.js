async function getMovesData() {
    // getting count limit
    let url = `https://pokeapi.co/api/v2/move?limit=1`
    const countResponse = await fetch(url);
    const countData = await countResponse.json();
    const count = countData["count"];
    // making request for all types
    url = url.slice(0, -1) + count;
    const response = await fetch(url);
    const data = await response.json();
    return data["results"];
};

async function getMoveDescription(moveName) {
    // Gettign move data
    let url = `https://pokeapi.co/api/v2/move/${moveName}`;
    const response = await fetch(url);
    const data = await response.json();
    
    // Returning the english description
    let description = ""
    data["effect_entries"].forEach((effect) => {
        if (effect["language"]["name"] == "en" && !description) {
            description = effect["effect"];
        }
    });
    if (!description) {
        description = `No description found in database for ${moveName}`;
    }
    return description;
};

async function createAccordionItem(moveName, count) {
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
    button.setAttribute("class", "accordion-button collapsed");
    button.setAttribute("id", "accordionButton");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", `#collapse${count}`);
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-controls", `collapse${count}`);
    button.innerText = moveName[0].toUpperCase() + moveName.slice(1);
    // Collapser
    let collapser = document.createElement("div");
    collapser.setAttribute("id", `collapse${count}`);
    collapser.setAttribute("class", "accordion-collapse collapse bg-light border-bottom border-secondary");
    collapser.setAttribute("aria-labelledby", `heading${count}`);
    // Body
    let innerBody = document.createElement("div");
    innerBody.setAttribute("class", "accordion-body");
    innerBody.innerText = await getMoveDescription(moveName);
    
    // Nesting elements
    item.appendChild(header);
    header.appendChild(button);
    item.appendChild(collapser);
    collapser.appendChild(innerBody);

    return item;
};

async function createAccordion() {
    // Creating base element
    let accordion = document.createElement("div");
    accordion.setAttribute("class", "accordion");
    accordion.setAttribute("id", "pokeBilities");

    // Getting and sorting results of all abilities
    const moveCollection = await getMovesData();
    let abilitiyNames = [];
    moveCollection.forEach((element) => {
        abilitiyNames.push(element["name"]);
    });
    abilitiyNames.sort()
    
    let counter = 0;
    abilitiyNames.forEach(async(moveName) => {  
        counter += 1;      
        let item = await createAccordionItem(moveName, counter);
        accordion.appendChild(item);;
    });

    // Adding Element to page
     document.getElementById("accordionHolder").appendChild(accordion);
};

document.addEventListener("DOMContentLoaded", createAccordion);