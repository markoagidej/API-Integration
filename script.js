let starterPicURLs = [
    [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", // Bulbasaur
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", // Charmander
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", // Squirtle
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", // Pikachu
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png", // Chikorita
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png", // Cyndaquil
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png", // Totodile
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png", // Treecko
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png", // Torchic
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png", // Mudkip
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png", // Turtwig
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png", // Chimchar
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png", // Piplup
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png", // Snivy
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png", // Tepig
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png", // Oshawott
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png", // Chespin
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png", // Fennekin
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png", // Froakie
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png", // Rowlet
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png", // Litten
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png", // Popplio
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png", // Grookey
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png", // Scorbunny
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png", // Sobble
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png", // Sprigatito
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png", // Fuecoco
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png", // Quaxly
    ],
    [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png", // Bulbasaur
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png", // Charmander
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png", // Squirtle
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png", // Pikachu
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/152.png", // Chikorita
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/155.png", // Cyndaquil
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/158.png", // Totodile
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/252.png", // Treecko
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/255.png", // Torchic
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/258.png", // Mudkip
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/387.png", // Turtwig
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/390.png", // Chimchar
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/393.png", // Piplup
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/495.png", // Snivy
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/498.png", // Tepig
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/501.png", // Oshawott
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/650.png", // Chespin
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/653.png", // Fennekin
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/656.png", // Froakie
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/722.png", // Rowlet
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/725.png", // Litten
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/728.png", // Popplio
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/810.png", // Grookey
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/813.png", // Scorbunny
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/816.png", // Sobble
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/906.png", // Sprigatito
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/909.png", // Fuecoco
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/912.png", // Quaxly
    ]
];

function displayRandomStarterImage() {
    if (Math.random() < .9) {
        randomImageURL = starterPicURLs[0][Math.floor(Math.random() * starterPicURLs[0].length)];
    } else {
        randomImageURL = starterPicURLs[1][Math.floor(Math.random() * starterPicURLs[0].length)];
    }
    document.getElementById("starter").setAttribute("src", randomImageURL);
}

document.addEventListener("DOMContentLoaded", displayRandomStarterImage);