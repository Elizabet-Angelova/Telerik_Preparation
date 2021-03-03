function solve(arr){
let str = arr[0]
for (let i = 1; i < arr.length; i++){
    let command = arr[i]
    command = command.split(' ')
    if (command.length === 3){
        if (command[0] === 'Replace'){
            for (let i = 0; i < str.length; i++){
                if (str[i] === command[1]){
                    let newarr1 = str.split('')
                    newarr1.splice(i, 1, command[2])
                    str = newarr1.join('')
                }  
            }
            console.log(str)
        }
        if (command[0] === 'Cut'){
            if (Number(command[1]) >= 0 && Number(command[2]) <= (str.length - 1)){
            let del = (Number(command[2]) - Number(command[1])) + 1
                let newarr2 = str.split('')
                newarr2.splice(Number(command[1]), del)
                str = newarr2.join('')
                console.log(str)
            } else {
                console.log('Invalid indexes!')
            }
        
        }
        if (command[0] === 'Sum'){
            if (Number(command[1]) >= 0 && Number(command[2]) < (str.length - 1)){
                let newarr = []
                let sum = 0
                for (let i = Number(command[1]); i <= Number(command[2]); i++){
                    newarr.push(str[i])
                }
                for (let j = 0; j < newarr.length; j++){
                    sum += newarr[j].charCodeAt(0)
                }
                console.log(sum)
                } else {
                    console.log('Invalid indexes!')
                }
        }
    } if (command.length === 2){
        let newstr = ''
        if (command[0] === 'Make' && command[1] === 'Upper'){
            for (let i = 0; i < str.length; i++){
                newstr += str[i].toUpperCase()
            }
            str = newstr
            console.log(str)
        } 
        if (command[0] === 'Make' && command[1] === 'Lower'){
            for (let i = 0; i < str.length; i++){
                newstr += str[i].toLowerCase()
            }
            str = newstr
            console.log(str)
        } 
        if (command[0] === 'Check'){
            if (str.includes(command[1]) === true){
                console.log(`Message contains ${command[1]}`)
            } else if (str.includes(command[1]) === false){
                console.log(`Message doesn't contain ${command[1]}`)
            }
        }
    }
    if (command[0] === 'Finish'){
        break
    }
}
}
