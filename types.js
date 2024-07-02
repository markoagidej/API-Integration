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

async function createAccordianItem(data, count) {
    // Element creation
    // Item Wrapper
    let item = document.createElement("div");
    item.setAttribute("class", "accordian-item");
    // Header
    let header = document.createElement("h2");
    header.setAttribute("class", "accordian-header");
    header.setAttribute("id", `heading${count}`);
    // Button
    let button = document.createElement("button");
    button.setAttribute("class", "accordian-button");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", `#collapse${count}`);
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-controls", `collapse${count}`);
    // Collapser
    let collapser = document.createElement("div");
    collapser.setAttribute("id", `collapse${count}`);
    collapser.setAttribute("class", "accordian-collapse collapse");
    collapser.setAttribute("aria-labelledby", `heading${count}`);
    collapser.setAttribute("data-bs-parent", "#pokeCcordion");
    // Body
    let innerBody = document.createElement("div");
    collapser.setAttribute("class", "accordian-body");
    innerBody.innerHTML = `Test body ${count}`

    // Nesting elements
    item.appendChild(header);
    header.appendChild(button);
    item.appendChild(collapser);
    collapser.appendChild(innerBody);

    return item;
}

async function createAccordian() {
    // Creating base element
    let accordion = document.createElement("div");
    accordion.setAttribute("class", "accordion");
    accordion.setAttribute("id", "pokeCcordion");

    // Creating and adding item for every Type in results
    typeCollection = await getTypeData();
    let counter = 1;
    typeCollection.forEach(async(element) => {
        const item = await createAccordianItem(element, counter);
        accordion.appendChild(item);
        counter += 1;
    });

    // Adding Accordion Element to page
     document.getElementById("accordionHolder").appendChild(accordion);
}

document.addEventListener("DOMContentLoaded", createAccordian);