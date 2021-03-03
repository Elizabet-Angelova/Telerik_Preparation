let multiply = (a) => a * 2


let forEach = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(fn(arr[i]))
    }
}

forEach([1, 3, 5], multiply)