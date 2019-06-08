// Sum all the prime numbers up to and including the provided number

// The provided number may not be a prime
function sumPrimes(num){
    let result=[];

    if(num<=1) return -1;
    
    function isPrimer(n){
        for(let i=2;i<n;i++)
            if(n%i===0) return false;
        return true;
    }

    for(let i=2;i<=num;i++){
        if(isPrimer(i)) result.push(i);
    }

    return result.reduce((x, y) => x+y);
}

let result=sumPrimes(977);
console.log(result);