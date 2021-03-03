function findPr(num) {
    if (num === 1 || num === 2) {
        return true;
    }
    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            return false;
        }

    }
    return true;
}

function solve(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (findPr(arr[i])) {

            newArr.push(arr[i]);


        }
    }
    
    for (let i = 0; i < newArr.length; i++){
        let temp = newArr[i];
        let arrOutput = []
         for (let j = 1; j <= temp; j++){
            if (findPr(j)){
                arrOutput.push(1)
            } else {
                arrOutput.push(0)
            }
         }
         console.log(arrOutput.join(''))
    }

}

solve(27)


