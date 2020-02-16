function deljiviSa5 (arr){
    for (let element of arr){
        if (element % 5 == 0 && element > 0){
            console.log(element);
        }
    }
}

let niz = [-5,1,12,15,22,35,57,60];

deljiviSa5(niz);