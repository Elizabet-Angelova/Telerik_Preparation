function solve(price, money){
    price = price * 100
    let change = ((money * 100) - price) 
 if (change - 100 > 0){
     let levs = parseInt(change / 100)
   console.log(levs + ' x 1 lev')
     change = change - levs * 100
 }  if (change - 50 > 0){
    let fifty = parseInt(change / 50)
  console.log(fifty + ' x 50 stotinki')
    change = change - fifty * 50
}  if (change - 20 > 0){
    let twenty = parseInt(change / 20)
  console.log(twenty + ' x 20 stotinki')
    change = change - twenty * 20
}  if (change - 10 > 0){
    let ten = parseInt(change / 10)
  console.log(ten + ' x 10 stotinki')
    change = change - ten * 10
}  if (change - 5 > 0){
    let five = parseInt(change / 5)
  console.log(five + ' x 5 stotinki')
    change = change - five * 5
}  if (change - 2 > 0){
    let two = parseInt(change / 2)
  console.log(two + ' x 2 stotinki')
    change = change - two * 2
}  if (change - 1 >= 0){
    let one = parseInt(change / 1)
  console.log(one + ' x 1 stotinki')
    change = change - one * 1
}

}
solve (18, 20)