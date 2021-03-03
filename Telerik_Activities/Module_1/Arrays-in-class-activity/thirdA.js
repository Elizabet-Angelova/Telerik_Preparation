const printMatrixA = (n) => {
   
   for (let i = 1; i <= n; i++){
      let row = ''
      for (let j = 0; j < n; j++){
         row += j*n + (i) + ' '
        
      } 
      console.log(row)
   }
   
}

printMatrixA(4)