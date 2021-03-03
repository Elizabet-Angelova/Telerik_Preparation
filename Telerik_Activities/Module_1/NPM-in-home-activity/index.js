const isNumber = require('is-number')
const _ = require('lodash')

let arr3 = [1, 2, 'telerik aCademy', 'john', 'mAriA', 32, 'we ARE the CHAMPIONS']

function capitalize (arr) {
let newArr = []
for (let el of arr) {
    if (_.isString(el)) {
        newArr.push(el)
    }
}

let newArr2 = []
for (let el of newArr) {
    let modifiedElement = _.capitalize(el)
    newArr2.push(modifiedElement)
}

return newArr2.join(', ')
}
