const fetchPokemon = () => {
    const PokeName = document.getElementById("pokeName");
    let pokeInput = PokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        Imprimir(pokeImg);
    })
}

fetchPokemon();

const Imprimir = (url) =>{
    const PokeImg = document.getElementById("PokeImg");
    PokeImg.src = url;
}