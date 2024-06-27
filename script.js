let starterPicURLs = []
starterPicURLs.push("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"); // Bulbasaur
starterPicURLs.push("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"); // Charmander
starterPicURLs.push("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"); // Squirtle
starterPicURLs.push("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"); // Squirtle

function displayRandomStarterImage() {
    randomImageURL = starterPicURLs[Math.floor(Math.random() * starterPicURLs.length)];
    document.getElementById("starter").setAttribute("src", randomImageURL);
}

document.addEventListener("DOMContentLoaded", displayRandomStarterImage);