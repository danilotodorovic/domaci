let n = 5;
for(i=1; i<=n; i++){
    let space='';
    for(k=n-1;k>=i;k--){
        space=space + ' ';
    }
    let taraba = '#';
    for (j=1; j<i; j++){
        taraba += '#'
    }

    let taraba2 = '#';
    for (i=1; i < j; i++){
        taraba2 = taraba2 + '#';
    }
    console.log(space+taraba+' '+taraba2);
}