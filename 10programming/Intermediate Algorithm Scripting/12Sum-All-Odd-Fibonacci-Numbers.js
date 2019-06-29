//  return the sum of all odd Fibonacci numbers that are less than or equal to num

// umFibs(10) should return 10 
// because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5
// 1, 1, 2, 3, 5, 8, 13...

function sumFibs(num) {
    let current=1;
    let previous=0;
    let result=0;
    while(num>=current){
        if(current%2!==0) result+=current;
        current=current+previous;
        previous=current-previous;
    }
    return result;
}

function sumFibs2(num){
    if(num<=0) return -1;
    if(num===1) return 1;

    let result=[1, 1];
    let next=0;
    while((next=result[result.length-1]+result[result.length-2])<=num) 
        result.push(next);

    return result.reduce((accumulator, currentValue) => accumulator+currentValue*(currentValue%2));
}

