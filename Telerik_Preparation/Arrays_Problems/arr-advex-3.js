function solve(arr){
    let arrNames = []
    for (let i = 0; i < arr.length; i++){
        let commands = arr[i].split(' ')
        let name = commands[0]
        let notOrGoing = commands[2]
        if (notOrGoing === 'going!'){
            if(arrNames.indexOf(name) === -1) {
                arrNames.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if(arrNames.indexOf(name) === -1) {
                console.log(`${name} is not in the list!`);
            } else {
                arrNames.splice(arrNames.indexOf(name), 1);
            }
        }
    }
    console.log(arrNames.join(`\n`))
}
    solve(['Allie is going!', 'George is going!', 'John is not going!','George is not going!'])
    

