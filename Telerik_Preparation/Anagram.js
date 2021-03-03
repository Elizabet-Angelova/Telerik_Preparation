let input = [

  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

  let word = gets()
  arr = word.split('')
  let n = +gets()
  let res = []
  for (let i = 0; i < n; i++){
      let w = gets()
      fuck = w.split('')
      arr = word.split('')
      if (arr.length !== fuck.length){
      res.push('No')
  } else {
      let newarr = []
      for (let j = 0; j < fuck.length; j++){
          let el = fuck[j]
          for (let d = 0; d < arr.length; d++){
              if (el === arr[d]){
                  fuck.splice(j, 1)
                  arr.splice(d, 1)
                  j = -1
                  d = -1
                  break
              }
             
          }
      }
      if (arr.length === 0 && fuck.length === 0){
          res.push('Yes')
      } else {
        res.push('No') 
      }
  }
  
  }
  print(res.join(`\n`))