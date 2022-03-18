const fetchPokemon = () => {
    const PokeName = document.getElementById("pokeName");
    let pokeInput = PokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            Imprimir("../img/MissingNo.png","000","Glitch","Easter egg","∞","-∞","Bug");
        }else{
            return res.json();
        }
    }).then((data) => {        
        let pokeImg = data.sprites.front_default;
        let pokeNumero = data.game_indices[3].game_index;        
        let pokeName = data.species.name;
        let pokeType = data.types[0].type.name;
        let pokeHeight = data.height/10;        
        let pokeWeight = data.weight/10;
        let pokeAbilities = data.abilities[0].ability.name;    
        
        Imprimir(pokeImg,pokeNumero,pokeName,pokeType,pokeHeight,pokeWeight,pokeAbilities);
        
    })
}



const Imprimir = (img,numero,nombre,tipo,altura,peso,habilidad) =>{
    const PokeImg = document.getElementById("PokeImg");
    PokeImg.src = img;
    PokeImg.style.height = "250px";
    PokeImg.style.width = "200px";
    document.getElementById("Numero").innerHTML = numero;
    document.getElementById("Nombre").innerHTML = nombre.toUpperCase();
    document.getElementById("Tipo").innerHTML = tipo.toUpperCase();
    document.getElementById("Altura").innerHTML = altura + " m";
    document.getElementById("Peso").innerHTML= peso + " Kg";
    document.getElementById("Movimiento").innerHTML = habilidad.toUpperCase();
}
