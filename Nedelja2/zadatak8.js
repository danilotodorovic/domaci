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
    console.log(space+taraba);
}