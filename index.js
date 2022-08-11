const pokemonPics = {
  bulbasaur: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  charmander: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  squirtle: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  pikachu: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
};

document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("poke-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const pokemon = document.getElementById("my_pokemon");

    const nickname = document.createElement("p");
    nickname.innerHTML = `Nickname: ${
      document.getElementById("nick-name").value
    }`;
    const kindOption =
      document.getElementById("pokemon-kind").selectedOptions[0].value;
    const kind = document.createElement("p");
    kind.innerHTML = `Kind: ${kindOption}`;

    const img = document.createElement("img");
    img.src = pokemonPics[kindOption];
    img.alt = kind.innerHTML;
    img.width = 200;

    const poke = document.createElement("li");

    poke.appendChild(img);
    poke.appendChild(nickname);
    poke.appendChild(kind);

    pokemon.appendChild(poke);
    // event.target.reset()
  });
});
