let resultPos = ['A10', 'A9', 'A8', 'A7', 'A6', 'A5', 'A4', 'A3', 'A2', 'A1', 'A0']

function addToRes(arr1, i, res) {
    let desired = arr1[i]
    let j
    for(j = 0; j < 10; j++) {
        if(desired === 1) {
            break
        }

        desired /= 2
    }
    res.push(resultPos[j])
    return res;
}

function solve(n){
    let arr1 = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]
    
   let prom
   let res = []
   for (let i = 0; i < arr1.length; i++){
        if ((n  - arr1[i]) >= 0) {
        prom = (n - arr1[i])
        arr1.splice(i, 1)
        if (prom === 0){
            for (let i = 0; i < arr1.length; i ++){
                res = addToRes(arr1, i, res);
             }
                    console.log(res.join(`\n`))
                    break
                
        }
        }
   for (let i = 0; i < arr1.length; i++){ 
     if (prom - arr1[i] >= 0){
       prom = prom - arr1[i]
        arr1.splice(i, 1)
        i = -1
        if (prom === 0){
        
     for (let i = 0; i < arr1.length; i ++){
        res = addToRes(arr1, i, res);
     }
            console.log(res.join(`\n`))
            break
        }
     }
    }
     } 
}
    
solve(1337)