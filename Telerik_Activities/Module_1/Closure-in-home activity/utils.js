const add = (a, b) => a + b;
// const createPerson = (name, age, gender) => {
//     return {
//       name,
//       age,
//       gender
//     };
//   };

const decorateWithLogging = (func) => {
   let counter = 0
    const function1 = (...rest) => {
        console.log(`Invoked: ${++counter} times`)
        return func(...rest) 
    }
    
return function1

}

const cach = (fn) => {
  let cached = {}

    const inner = (...rest) => {
      const key = rest.sort().join(' ');
      if (!cached[key]) {
        cached[key] = fn(...rest)
        console.log(`Cached!`)
        return fn(...rest)
      } else {
        return cached[key]
      }
    }
    return inner
}
// const decoratedAdd = decorateWithLogging(createPerson);
// const result = decoratedAdd('Martin', '43', 'male');
// const result2 = decoratedAdd('Ani', '13', 'female')
// const result3 = decoratedAdd('Petar', '28', 'male')
// console.log(result)
// console.log(result2)
// console.log(result3)

const decoratedWithCache = cach(add)
console.log(decoratedWithCache(1, 2))
console.log(decoratedWithCache(2, 2))
console.log(decoratedWithCache(1, 2))


