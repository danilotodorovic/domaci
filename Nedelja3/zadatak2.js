function getCenaPice (poluprecnik,cena){
    let povrsina = poluprecnik**2 * Math.PI;
    let rezultat = cena/povrsina;
    return `Cena pice po kvadratnom centimetru je ${rezultat}.`;
}
let info = getCenaPice (10,200);
console.log(info);

