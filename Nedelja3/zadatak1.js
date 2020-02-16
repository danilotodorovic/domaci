function getNajveciBroj(broj1, broj2, broj3) {
    let rezultat = Math.max(broj1, broj2, broj3)
    return `Najveci broj je ${rezultat}`;
}
//let info = getNajveciBroj(2, 30, 231)
//console.log(info);

function maksimum(br1, br2, br3) {
    maksimum = br1;
    if (maksimum < br2) {
        maksimum = br2;
    } if (maksimum < br3) {
        maksimum = br3;
    }
    return maksimum;
}
let max = maksimum(25, 18, 13)
console.log(max);