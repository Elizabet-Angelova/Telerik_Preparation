function solve (arr, n, word) {
   let matrix = [];
   let str;
   for (let i = 0; i < arr.length; i++) {
      if (i % n === 0) {
         str = '';
         for (let j = i; j < i + n; j++) {
            if (arr[j] === 'undefined') {
               break;
            } else {
               str += arr[j];
            }
         }
         matrix.push(str);
      }


   }
   let temp;
   for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].includes(word)) {
         temp = i + 1;
      }

   }
   if (!temp) {
      console.log(-1);
   } else {
      console.log(temp);
   }
}

