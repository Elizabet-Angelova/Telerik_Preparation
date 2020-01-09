function solve(firstName, lastName, age){
    class Person {
        constructor(firstName, lastName, age){
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
        }
        getPersInfo(){
            console.log('firstName: ' + this.firstName)
            console.log('lastName: ' + this.lastName)
            console.log('age: ' + this.age)
        }
    }

    let person1 = new Person(firstName, lastName, age)
    person1.getPersInfo()
}
solve('Peter', 'Pan', '20')