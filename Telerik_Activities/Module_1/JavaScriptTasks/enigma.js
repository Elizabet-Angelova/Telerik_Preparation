function solve (str){
    str = str.split(',')
    let arrBi = []
   for (let i = 0; i < str.length; i++){
       let binary = ((Number(str[i])).toString(2))
       binary = binary.split('')
       if (binary.length < 8){
           let zeros = 8 - binary.length
           for (let j = 0; j < zeros; j++){
               binary.unshift(0)
           }
       }
       arrBi.push(binary)
     
   }

   for (let i = 0; i < arrBi.length; i++){
       if (i%2 === 0){
        for (let j = 0; j < arrBi[i].length; j++){
            if (j%2 === 0){
                arrBi[i].splice(j, 1, '*')
            }
        }
    

        for (let j = 0; j < arrBi[i].length; j++){
            let temp = arrBi[i] 
            if (temp[j] === '*'){
                temp.splice(j, 1)
            }
        }



       } else if (i%2 !== 0){
         for (let j = 0; j < arrBi[i].length; j++){
            if (j%2 !== 0){
                arrBi[i].splice(j, 1, '*')
            }
        }
        for (let j = 0; j < arrBi[i].length; j++){
            let temp = arrBi[i] 
            if (temp[j] === '*'){
                temp.splice(j, 1)
            }
        }

       }
   }

   for (let i = 0; i < arrBi.length; i++){
       arrBi[i] = arrBi[i].join('')
   }

   console.log(arrBi.join(''))

}


solve('2,1,0,2')