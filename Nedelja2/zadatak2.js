// Prodavnica
var cena = 20
var novac = 25
if (novac<cena){
    console.log('Nemate dovljno novca')
    console.log('Trenutno stanje ' + novac);
    }
    else{
        console.log('Uspesno ste kupili proizvod');
        console.log('Trenutno stanje ' + (novac - cena));
        }