class Circle {
    constructor(xCo, yCo, radius) {
        this.xCo = xCo
        this.yCo = yCo
        this.radius = radius
    }
 
    move(x, y) {
        this.xCo = x
        this.yCo = y
    }
 
    check(x, y) {
        let deltaX = (this.xCo - x)
        let deltaY = (this.yCo - y)
        let distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY))
        if (distance > this.radius){
            console.log('false')
        } else {
            console.log('true')
        }
    }
}

function solve(arr){
    let indexes = arr[0].split(' ')
    let radius1 = Number(indexes[0])
    let initial_X = Number(indexes[1])
    let initial_Y = Number(indexes[2])
    let circle1 = new Circle(initial_X, initial_Y, radius1)
    
    let commands = []
    for (let i = 1; i < arr.length; i++){
        commands = arr[i].split(' ')
             let command = commands[0]
             let xCom = Number(commands[1])
             let yCom = Number(commands[2])
             if (command === 'move'){
                 circle1.move(xCom, yCom)
             } else {
                 circle1.check(xCom, yCom)
             }
    }


    
}

//solve(['5 5 0', 'move 0 0', 'check 3 0', 'check 0 5'])