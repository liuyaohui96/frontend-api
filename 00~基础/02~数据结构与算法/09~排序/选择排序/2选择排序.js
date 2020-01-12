
function selectionSort(arr){
    for(let i=0; i<arr.length-1;i++){
        let minindex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minindex]) minindex=j;
        }
        
        [arr[i], arr[minindex]]=[arr[minindex], arr[i]];
    }
}

let arr=[1, 3, 2, 4]
let result=selectionSort(arr);
console.log(arr);