// function solve(arr){
//     let smallest
//     let newarr = []
//     for (let i = 0; i < arr.length; i++){
//         let smallest = arr[i]
//         for (let j = 0; j < arr.length; j++){
//             if (arr[j] < smallest){
//                 smallest = arr[j]
//             }
//         }
//         arr.splice(arr.indexOf(smallest), 1)
//     newarr.push(smallest)
//     i = -1;
//     }


//     console.log(newarr)
// }
function solve(arr){
    let smallest
    let newarr = []
    while(arr.length > 0){
        let smallest = arr[0]
        for (let j = 0; j < arr.length; j++){
            if (arr[j] < smallest){
                smallest = arr[j]
            }
        }
        arr.splice(arr.indexOf(smallest), 1)
        newarr.push(smallest)
    }


    console.log(newarr)
}
solve([3, 2, 4, 1])