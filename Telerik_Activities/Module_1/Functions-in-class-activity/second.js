const checkFn = (a) => {
    if (a % 2 === 0) {
        return true
    } 
        return false
    
}



function filter(arr, checkFn) {
    let newArray = []
    for (const el of arr) {
        if (checkFn(el)) {
            newArray.push(el)
        }
    }
    return newArray
}

console.log(filter([1, 2, 3, 4], checkFn))

