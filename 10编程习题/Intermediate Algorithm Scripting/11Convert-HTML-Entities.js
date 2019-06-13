
// 相当于7search-and-repalce
// 传统for循环+switch也可以
function convertHTML(str){
    let htmlEntities={
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&apos;'
    };
    return str.split('').map(item => htmlEntities[item]||item).join('');
}


function convertHTML2(str){
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

let result=convertHTML("Dolce & Gabbana");
console.log(result);
result=convertHTML2("Dolce & Gabbana");
console.log(result);