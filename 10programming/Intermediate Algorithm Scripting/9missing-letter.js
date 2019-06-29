// 返回不连续的字符



function findMissingLetterr(str) {
    for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i-1)!=1) {
          return String.fromCharCode(str.charCodeAt(i-1)+1);
        }
    }
}


function findMissingLetterr2(str){
    // 第一个字母的charcode
    let code = str.charCodeAt(0);

    let i=1;
    while(str.charCodeAt(i)==++code){
        i++;
        if(i==str.length){
            return undefined;
        }
    }

    return String.fromCharCode(code);

}
let result= findMissingLetterr('abcdefghijklmnopqrstuvwxyz');
result= findMissingLetterr2('abcdefghijklmnopqrstuvwxyz');
console.log(result);