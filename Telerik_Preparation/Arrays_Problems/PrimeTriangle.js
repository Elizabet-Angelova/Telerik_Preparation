function solve(n){
    let arr = []
    for (let i = 1; i <= n; i++){
        arr.push(i)
    }

    let copy = [...arr];
    for (let i = 3; i < copy.length; i ++){
        for (let j = 2; j < copy[i]; j++){
            let num = copy[i]
        if (num % j === 0){
            arr.splice(arr.indexOf(num), 1)
            break;
        }
    }
    }
    
    for (let i = 0; i < arr.length; i++){
        let row = []
        for (let j = 1; j <= arr[i]; j++){
            if (arr.indexOf(j) !== -1){
            row.push(1) }
         else {
             row.push(0)
         }
            }
        console.log(row.join(''))
    }  


}
solve(27)