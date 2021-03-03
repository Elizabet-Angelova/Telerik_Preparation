let modifyFn = (parameter) => {
    return parameter + 10
}



let map = (arr) => {
    let newArr = []
    for (const el of arr) {
        newArr.push(modifyFn(el));
    }
    return newArr
}

console.log(map([1, 2, 3]))