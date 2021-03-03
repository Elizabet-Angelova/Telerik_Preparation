const { fileJoin , fileRename } = require('./module')

let resultJoin = fileJoin('./files/result.txt', './files/people.1.txt', './files/people.txt')

let resultRename = fileRename('./files/result.txt', './files/result-renamed.txt')

console.log(resultJoin)
console.log(resultRename)



