const map = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 10
    }
    return arr
}

const filter = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

const write = (arr) => {
    console.log(arr)
}

let arr = [1, 2, 3]
write(filter(map(arr)))
