//1

let pikacu = {
    ime: 'pikacu',
    vrsta: 'elektricni',
    sposobnosti: ['staticki elektricitet','strujni udar','super sprint'],
    karakteristike: {napad: 55, odbrana: 30, brzina: 90}
}

let carmander = {
    ime: 'carmander',
    vrsta: 'vatreni',
    sposobnosti: ['bacac plamena','vatreni udar','uzarena lopta'],
    karakteristike: {napad: 70, odbrana: 35, brzina: 70}
}

let bulbasaur = {
    ime: 'bulbasaur',
    vrsta: 'travnati',
    sposobnosti: ['ostri listovi','bic','svetlosni top'],
    karakteristike: {napad: 80, odbrana: 60, brzina: 35}
}

let skvirtl = {
    ime: 'skvirtl',
    vrsta: 'vodeni',
    sposobnosti: ['vodeni top','rasprskali mlaz','tvrdi oklop'],
    karakteristike: {napad: 60, odbrana: 80, brzina: 40}
}

let pokemoni = [pikacu, carmander, bulbasaur, skvirtl]
console.log(pokemoni);

//2

function sposobnostiPokemona(niz){
    let nizSposobnosti = [];
    for (let i = 0; i < niz.length; i++){
        nizSposobnosti.push(niz[i].sposobnosti) 
    }
    return `Sposobnosti svih pokemona su ${nizSposobnosti}.`
}
console.log(sposobnostiPokemona(pokemoni));

//3

pokemoni.sort ((a,b) => {
    return a.karakteristike.brzina - b.karakteristike.brzina
});

console.log(pokemoni);

//4

function winner (arr){
    let maxPos = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].karakteristike.napad;
        if (element > arr[maxPos].karakteristike.napad) {
            maxPos = i;
        }

    }
    return arr[maxPos];

}
let pobednik = winner(pokemoni);
console.log(`Pobenik je: ${pobednik.ime}`);

//5

let btn_prikaz = document.querySelector('#prikaz');
let btn_pobednik = document.querySelector('#pobednik');
let app = document.querySelector('#app');




function ispisiOpis(pokemon) {
    return `Ime: ${pokemon.ime} <br>
        Vrsta: ${pokemon.vrsta} <br>
        Sposobnosti: ${pokemon.sposobnosti}<br>
        Karakteristike: napad: ${ pokemon.karakteristike.napad}, odbrana: ${pokemon.karakteristike.odbrana}, brzina: ${pokemon.karakteristike.brzina }
    `;
}


btn_prikaz.addEventListener('click', ()=>{
    app.innerHTML='';
    for (let i = 0; i < pokemoni.length; i++) {
        let div = document.createElement('div');
        div.className = 'pokemon';
        let p = document.createElement('p');
        p.innerHTML = ispisiOpis(pokemoni[i]);
        let img = document.createElement('img');
        img.src = `${pokemoni[i].ime}.png`;
        div.appendChild(p);
        div.appendChild(img);
        app.appendChild(div);
    }
  
});


btn_pobednik.addEventListener('click', ()=>{
        app.innerHTML='';
        let div = document.createElement('div');
        div.className = 'pokemon';
        let p = document.createElement('p');
        p.innerHTML = ispisiOpis(pobednik);
        let img = document.createElement('img');
        img.src = `${pobednik.ime}.png`;
        div.appendChild(p);
        div.appendChild(img);
        app.appendChild(div);    

    }
);