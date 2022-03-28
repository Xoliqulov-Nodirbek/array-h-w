const pokemonts = [
    
    // ---- > one
    {
        img: "http://www.serebii.net/pokemongo/pokemon/001.png",
        name: "Bulbasaur",
        type: [
            "Grass",
            "Poison"
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
    },
    
    // ---- > two
    {
        name: "Ivysaur",
        img: "http://www.serebii.net/pokemongo/pokemon/002.png",
        type: [
            "Grass",
            "Poison"
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ]
    },
    
    // ---- > three
    {
        name: "Venusaur",
        img: "http://www.serebii.net/pokemongo/pokemon/003.png",
        type: [
            "Grass",
            "Poison"
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ]
    },
    
    // ---- > four
    {
        name: "Charmander",
        img: "http://www.serebii.net/pokemongo/pokemon/004.png",
        type: [
            "Fire"
        ],
        weaknesses: [
            "Water",
            "Ground",
            "Rock"
        ],
    },
    
    // ---- > five
    {
        name: "Charmeleon",
        img: "http://www.serebii.net/pokemongo/pokemon/005.png",
        type: [
            "Fire"
        ],
        weaknesses: [
            "Water",
            "Ground",
            "Rock"
        ],
    }
];

const wrapper = document.querySelector(".wrapper");

for (i = 0; i < pokemonts.length; i++) {

    const pokemontsWrapper = document.createElement("div");
    pokemontsWrapper.className = "pokemonts__wrapper";

    const currentPokemonts = pokemonts[i];

    const pokemontsImg = document.createElement("img");
    pokemontsImg.className = "pokemonts__img";
    pokemontsImg.src = currentPokemonts.img;
    // pokemontsImg.setAttribute("src", currentPokemonts.img);
    pokemontsWrapper.appendChild(pokemontsImg);

    const pokemontsTitle = document.createElement("h2");
    pokemontsTitle.className = "pokemonts__title";
    pokemontsTitle.textContent = currentPokemonts.name;
    pokemontsWrapper.appendChild(pokemontsTitle);
    
    const pokemontsType = document.createElement("ul");
    pokemontsType.className = "pokemonts__type";

    const pokemontsTypeItem1 = document.createElement("li");
    pokemontsTypeItem1.className = "pokemonts__type-item";
    pokemontsTypeItem1.textContent = currentPokemonts.type[0];
    
    const pokemontsTypeItem2 = document.createElement("li");
    pokemontsTypeItem2.className = "pokemonts__type-item";
    pokemontsTypeItem2.textContent = currentPokemonts.type[1];

    pokemontsType.appendChild(pokemontsTypeItem1);
    pokemontsType.appendChild(pokemontsTypeItem2);
    pokemontsWrapper.appendChild(pokemontsType);

    const pokemontsWeaknesses = document.createElement("ul");
    pokemontsWeaknesses.className = "pokemonts__weaknesses";

    const pokemontsWeaknessesItem1 = document.createElement("li");
    pokemontsWeaknessesItem1.className = "pokemonts__weaknesses-item";
    pokemontsWeaknessesItem1.textContent = currentPokemonts.weaknesses[0];
    
    const pokemontsWeaknessesItem2 = document.createElement("li");
    pokemontsWeaknessesItem2.className = "pokemonts__weaknesses-item";
    pokemontsWeaknessesItem2.textContent = currentPokemonts.weaknesses[1];

    const pokemontsWeaknessesItem3 = document.createElement("li");
    pokemontsWeaknessesItem3.className = "pokemonts__weaknesses-item";
    pokemontsWeaknessesItem3.textContent = currentPokemonts.weaknesses[2];

    const pokemontsWeaknessesItem4 = document.createElement("li");
    pokemontsWeaknessesItem4.className = "pokemonts__weaknesses-item";
    pokemontsWeaknessesItem4.textContent = currentPokemonts.weaknesses[3];

    pokemontsWeaknesses.appendChild(pokemontsWeaknessesItem1);
    pokemontsWeaknesses.appendChild(pokemontsWeaknessesItem2);
    pokemontsWeaknesses.appendChild(pokemontsWeaknessesItem3);
    pokemontsWeaknesses.appendChild(pokemontsWeaknessesItem4);
    pokemontsWrapper.appendChild(pokemontsWeaknesses);
    wrapper.appendChild(pokemontsWrapper);

}



