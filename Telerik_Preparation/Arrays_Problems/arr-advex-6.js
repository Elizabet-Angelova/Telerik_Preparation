function solve(arr1, arr2){
const bomb = arr2[0]
const power = arr2[1]
for (let i = 0; i < arr1.length; i++){
    if (arr1[i] === bomb){
        let startIndex = (i - power);
        let countDetonated = ((power*2) + 1)
        if(startIndex < 0) {
            startIndex = 0;
        } if (startIndex + countDetonated > arr1.length){
            countDetonated = arr1.length - startIndex;
        }
        arr1.splice(startIndex, countDetonated)
        i = -1
    }
}
    if(arr1.length) {
        
    console.log(arr1.reduce((a, b) => (a + b)))
    } else {
        
    console.log(0)
    }
}