function solve (n){
    let arr = n.split('')
    let sum = 0
    let newarr = []
    let newsum = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === '-'){  
            arr.splice(i, 1)
        } if (arr[i] === '.'){ 
            arr.splice(i, 1)
        }
        sum += Number(arr[i])
    }
    while (sum > 9){
        sum = '' + sum
        newarr = sum.split('')
        for (let i = 0; i < newarr.length; i++){

newsum += Number(newarr[i])
        }
        sum = newsum

     } 
    
   console.log(sum)
}
solve('1020340567.89')