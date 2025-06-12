const ditto = {
    id: 132,
    name: "ditto",
    type: "normal",
    abilities: ["limber", "imposter"],
    base_experience: 101,
    height: 3,
    weight: 40,
    stats: {
    hp: 48,
    attack: 48,
    defense: 48,
    special_attack: 48,
    special_defense: 48,
    speed: 48
    },
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    transform: function(){
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png"
    }
    };

    function load(pokemon){
        document.querySelector('#name').textContent = pokemon.name;
        document.querySelector('#ability').textContent = pokemon.abilities[1];
        document.querySelector('#ditto').src = pokemon.sprite;
    }
    load(ditto);

    let isShiny = false;

document.querySelector('#ditto').addEventListener('click', function() {
    const img = document.querySelector('#ditto');
    if (isShiny) {
        img.src = ditto.sprite;
    } else {
        img.src = ditto.transform();
    }
    isShiny = !isShiny;
});

const randomIndex = Math.floor(Math.random() * pokemon.abilities.length);
document.querySelector('#ability').textContent = pokemon.abilities[randomIndex];

function load(pokemon){
    document.querySelector('#name').textContent = pokemon.name;
    const randomIndex = Math.floor(Math.random() * pokemon.abilities.length);
    document.querySelector('#ability').textContent = pokemon.abilities[randomIndex];
    document.querySelector('#ditto').src = pokemon.sprite;
}


    
