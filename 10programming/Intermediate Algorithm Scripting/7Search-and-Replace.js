// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch".
function searchReplace(str, before, after){
    // 如果第一个字符是大写字母
    if(/[A-Z]/.test(before[0])){
        after=after.slice(0,1).toUpperCase()+after.slice(1);
    }
    return str.replace(before, after);
}


let result= searchReplace("He is Sleeping on the couch", "Sleeping", "sitting");
console.log(result);

