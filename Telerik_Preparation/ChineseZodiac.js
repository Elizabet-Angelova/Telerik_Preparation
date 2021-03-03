function solve (year){
let n = (year + 4) % 12
switch (n) {
    case 0:
    console.log('Dragon')
    break
      case 1:
       console.log('Snake');
        break;
      case 2:
        console.log('Horse');
        break;
      case 3:
        console.log('Sheep');
        break;
      case 4:
        console.log('Monkey');
        break;
      case 5:
        console.log('Rooster');
        break;
      case 6:
       console.log('Dog');
        break;
      case 7:
        console.log('Pig');
        break;
    case 8:
        console.log('Rat');
        break;
        case 9:
        console.log('Ox');
        break;
        case 10:
        console.log('Tiger');
        break;
        case 11:
        console.log('Hare');
        break;
    }
}
solve(2012)