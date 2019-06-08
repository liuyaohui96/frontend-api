// Base pairs are a pair of AT and CG.

// for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// 传统的switch配对加push也可以，不过代码量较多
function pairElement(str){
    // 将字符串的每个字符拆分为字符数组
    let arr=str.split('');

    let pairs={
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G'
    }

    return arr.map(item => [item, pairs[item]]);
}

let result = pairElement("GCG");
console.log(result);