/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    let superD = n.toString();
    
    if(superD.length === 1 && k === 1) return Number(superD);
     
    let currTotal = 0;
    for(let i = 0; i < superD.length; i++) {
        currTotal +=Number(superD[i]);
    }
    currTotal = currTotal * k;
    
    return superDigit(currTotal, 1);
}

superDigit(148, 3);
