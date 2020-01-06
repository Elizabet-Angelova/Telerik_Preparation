function solve (arr){
    wagons = arr[0].split(' ')
    let maxFucks = Number(arr[1])
    for (let i = 2; i < arr.length; i++){
        let commands = arr[i].split(' ')
        let commandOrFucks = commands[0]
        let fucks = commands[1]
     if (commandOrFucks === 'Add'){
         wagons.push(fucks)
     } else {
         for (j = 0; j < wagons.length; j++){
             if ((Number(wagons[j]) + Number(commandOrFucks)) <= Number(maxFucks)){
                 wagons[j] = Number(wagons[j]) + Number(commandOrFucks)
                 break
             }
         } 
     }
    }
    console.log(wagons.join(' '))
}
