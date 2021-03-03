function solve(arr1, arr2){
    let commands
    let newarr = []
    let command 
    let indexElementPosition
    let num 
    let newarr1 = []
    for (let i = 0; i < arr2.length; i++){
      let commands = arr2[i].split(' ')
    command = commands[0]
    indexElementPosition = Number(commands[1])
if (command === 'add'){
    if (indexElementPosition > (arr1.length - 1)) {
        indexElementPosition = arr1.length 
    }
    num = commands[2]
    arr1.splice(indexElementPosition, 0, Number(num))
} else if (command === 'addMany'){
    if (indexElementPosition > (arr1.length - 1)) {
        indexElementPosition = arr1.length 
    }
    let fuck = []
    for (let i = 2; i < commands.length; i++){
        fuck.push(Number(commands[i]))
    }
        arr1.splice((indexElementPosition) , 0, ...fuck)

} else if (command === 'contains'){
    let hasIndex = false;
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] === indexElementPosition){
            hasIndex = true;
            console.log(i)
            break
        }
    }
    if(!hasIndex){
        console.log(-1)
    }
} else if (command === 'remove'){
    arr1.splice(indexElementPosition, 1)
} else if (command === 'shift'){
    indexElementPosition = indexElementPosition % arr1.length
for (let i = indexElementPosition; i < arr1.length; i++){
    newarr.push(arr1[i])
} 
for (let i = 0; i < indexElementPosition; i++){
    newarr.push(arr1[i])
}
arr1 = newarr
newarr = []
} else if (command === 'sumPairs'){
for (let i = 0; i < arr1.length; i++){
    if (arr1.length >= 2){
        newarr1.push(arr1[i] + arr1[i + 1])
    arr1.splice(i, 2)
    i = -1
    } else {
newarr1.push(arr1[0])
break
    }
}
arr1 = newarr1
newarr1 = [];
} else {
    console.log(`[ ${arr1.join(', ')} ]`)
}
    }
}
//solve([1, 2, 3, 4, 5],
    //["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 148", "shift 1", "print"])