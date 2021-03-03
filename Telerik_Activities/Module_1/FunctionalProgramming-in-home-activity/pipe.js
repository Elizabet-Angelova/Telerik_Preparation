const getName = person => person.name;
const uppercase = string => string.toUpperCase();
const get3Characters = string => string.substring(0, 3);

const pipe = (...funcs) => {
    return (obj) => funcs.reduce((acc, curr) => curr(acc), obj)
}

console.log(pipe(getName, uppercase, get3Characters)({ name: 'Pesho' }))