// function solve (people) {

// for (let i = 0; i < people.length; i++){
//     people[i] = people[i].split('').sort().join('');
// }

// people = people.sort();
// return people
// }

// let arr = ['Ivan', 'Maria', 'Stoyan', 'Petar', 'Iva'];
// console.log(solve(arr));

const people = ['Ivan', 'Maria', 'Stoyan', 'Petar', 'Iva'];

let newAray = [];
for (let i of people) {
   newAray.push(Array.from(i).sort().join(''));
}
newAray.sort();
console.log(newAray.join(' '));