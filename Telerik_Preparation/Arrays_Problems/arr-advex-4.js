function solve(arr){
    newarr = []
    arr = arr.sort(function(a, b){
        return b - a
    })
    for (let i = 0; i < arr.length; i++){
newarr.push(arr[i], arr[arr.length - (i + 1)])
if (newarr.length >= arr.length){
    if (arr.length%2 !== 0){
        newarr.pop()
    }
    break
}
    }
    
console.log(newarr.join(' '))
}
//solve([2, 18, 94])