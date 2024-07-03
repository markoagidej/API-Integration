async function fetchPokemon(input) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await response.json()
    return data;
}

document.getElementById("searchForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchValue = document.getElementById("searchField").value.toLowerCase();
    const notFoundDiv = document.getElementById("notFound");
    const card = document.getElementById("pokeCard");
    try {
        const pokeData = await fetchPokemon(searchValue);
        notFoundDiv.setAttribute("class", "d-none");
        document.getElementById("pokeImg").setAttribute("src", pokeData["sprites"]["front_default"]);
        document.getElementById("cardName").innerText = pokeData["name"][0].toUpperCase() + pokeData["name"].slice(1);
        card.setAttribute("class", "card d-block");
    } catch (error) {
        card.setAttribute("class", "card d-none");
        notFoundDiv.setAttribute("class", "d-block");
        notFoundDiv.innerHTML = "No Pokemon found! Try searching again!";
        console.error("This is the error:", error);
    }
});