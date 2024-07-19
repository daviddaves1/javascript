function fatorial(num){
    let fat = 1;
    for(let number = num; number > 1; number--){
        fat *= number;
    }
    return fat;
}

console.log(fatorial(5));
