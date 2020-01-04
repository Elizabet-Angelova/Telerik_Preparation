function solve(ses, date){
if (ses === 'January' || ses === 'February'){
    print('Winter')
} else if (ses === 'March' && date < 20){
    print('Winter')
} else if (ses === 'March' && date >= 20){
    print('Spring')
} else if (ses === 'April' || ses === 'May'){
    print('Spring')
} else if (ses === 'June' && date < 21){
    print('Spring')
} else if (ses === 'June' && date >= 21){
    print('Summer')
} else if (ses === 'July' || ses === 'August'){
    print('Summer')
} else if (ses === 'September' && date < 22){
    print('Summer')
} else if (ses === 'September' && date >= 22){
    print('Autumn')
} else if (ses === 'October'|| ses === 'November'){
    print('Autumn')
} else if (ses === 'December' && date < 21){
    print('Autumn')
} else if (ses === 'December' && date >= 21){
    print('Winter')
}
}
solve('December', 21 )