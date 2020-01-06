function solve(arr1, arr2){
    let take = arr2[0]
    let del = arr2[1]
    let searchFor = arr2[2]
    let newarr = []
    let numOfOc = 0
    for (let i = 0; i < take; i++){
newarr.push(arr1[i])
    } 
    newarr.splice(0, del)

    for (let i = 0; i < newarr.length; i++){
        if (newarr[i] === searchFor){
numOfOc += 1
        }
    }
        console.log(`Number ${searchFor} occurs ${numOfOc} times.` )
}
