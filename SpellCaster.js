function solve(str){
    let words = str.split(' ') 
    let n = words.length
    let arrWords = []
    let arr = []
    for (let i = 0; i < words.length; i++){
        arrWords.push(words[i].split(''))
    } 
    while (arrWords.length !== 0){
        for (let j = 0; j < arrWords.length; j++){
            let word = arrWords[j]
            if (word.length !== 0){
            arr.push(word[word.length - 1])
            word.splice([word.length - 1], 1)
            } if (word.length === 0){
                arrWords.splice(arrWords.indexOf(word), 1)
                j = -1
            }
        }
    }
    let letter
    let index
    let org
   for(let i = 0; i < arr.length; i++){
       org = arr[i]
        letter = arr[i].toLowerCase()
        index = ((letter.charCodeAt(0)) - 96)
        let index2 = ((index + i) % arr.length)
        arr.splice(i, 1)
        arr.splice(index2, 0, org)
        if (i === arr.length - 1){
            break
        }
   }
   console.log(arr.join(''))
  
}
solve('Telerik Academy') 