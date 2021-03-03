const { List } = require('immutable');

// Require the json object and convert it to an immutable List
const people = (require('./people.json'));

const { cloneDeep } = require('lodash');

// const fullNames = people.map(person => `${person.firstName} ${person.lastName}`)
// console.log(fullNames)

// const youngerThan30 = people.filter(person => person.age < 30)
// console.log(youngerThan30)

// const createdAtFunction = people.map(person => Object.assign({createdAt: new Date().toLocaleDateString()}, person))
// console.log(createdAtFunction)


// const olderThan30sum = people
// .filter(person => person.age > 30)
// .reduce((sum, person) => sum += person.age, 0)
// console.log(olderThan30sum)

// const areTheyOver18 = people.reduce((answer, person) => {
//    if (person.age < 18){
//        answer = `Not all people are over 18`
//    }
//    return answer
// }, `All people are over 18`)
// console.log(areTheyOver18)

// const areTheyOver18 = people.every(person => person.age < 18)
// console.log(areTheyOver18)

// const isThereTerry = people.filter(person => person.firstName === 'Terry')
// console.log(isThereTerry)

// const isThereTerry = people.some(person => person.firstName === 'Terry')
// console.log(isThereTerry)

// const youngerThan30withDate = people.filter(person => person.age < 30).map(person => Object.assign({createdAt: new Date().toLocaleDateString()}, person))
// console.log(youngerThan30withDate)

// const youngerThan30withDatewithReduce = people.reduce((final, person) => {
//     if (person.age < 30) {
//         final.push(Object.assign({createdAt: new Date().toLocaleDateString()}, person))
//     } 
//     return final
// }, [])
// console.log(youngerThan30withDatewithReduce)


// const youngerThan30withDatewithReduce = people
// .filter(person => person.age < 30)
// .map(person => createdAtFunction(person))
// console.log(youngerThan30withDatewithReduce)

// ----------------------------------------------------------------------------------


const createPerson = (firstName, lastName, age) => {
    return { firstName, lastName, age }
}

// const fullName = (obj) => [obj].map((el) => `${el.firstName} ${el.lastName}`)
const fullName = (obj) => [obj].reduce((name, person) => {
    return name += `${person.firstName} ${person.lastName}`
    }, '')

console.log(fullName(createPerson('Martin', 'Kamenov', 24)))

// const modifyPerson = (object, properties) => Object.assign(object, properties)
const modifyPerson = (object, properties) => {
    if (properties){
    return { ...object, ...properties }
    }
    return object
}

console.log(modifyPerson(createPerson('Martin', 'Kamenov', 24), {gender: 'male', eyes: 'green'}))

