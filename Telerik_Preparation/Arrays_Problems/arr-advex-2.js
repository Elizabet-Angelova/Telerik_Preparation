function solve (arr){
    for (let i = 0; i < arr.length; i++){
        let cuEl = arr[i]
    for (let j = i + 1; j < arr.length; j++){
        if (cuEl === arr[j]){
            arr.splice(j, 1)
            j--;
        }
    }
    }
    console.log(arr.join(' '))
}
solve([1, 1, 1])