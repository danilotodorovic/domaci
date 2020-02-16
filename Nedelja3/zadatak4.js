function snabdevanjePicom (brojPica,brojGodina){
        ukupanBrojPica = (100-brojGodina)*12*brojPica;
        return ukupanBrojPica;
    }
console.log(snabdevanjePicom(10,22));