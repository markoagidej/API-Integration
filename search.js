async function fetchPokemon(input) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    console.log(response)
    const data = response.json()
    return data;
}

document.getElementById("searchForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchValue = document.getElementById("searchField").value;
    const infoSection = document.getElementById("info");
    try {
        const pokeData = await fetchPokemon(searchValue);
        infoSection.innerHTML = JSON.stringify(pokeData);
    } catch (error) {
        infoSection.innerHTML = "No Pokemon found! Try searching again!";
        console.error("this is the error", error);
    }
});