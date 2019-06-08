// 最小公倍数
function smallestCommons(arr){
    let result=1;

    // 最大公约数
    function gcd(a, b){
        while(b!=0){
            let c=a%b;
            a=b;
            b=c;
        }
        return a;
    }

    // 最小公约数
    function lcm(a, b){
        return a*b/gcd(a, b);
    }
    
    for(let i=Math.min(...arr);i<=Math.max(...arr);i++){
       result=lcm(result, i);
    }
    return result;
}
let result=smallestCommons([1,5]);
console.log(result);