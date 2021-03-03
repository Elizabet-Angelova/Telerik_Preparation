function solve(str) {
    arr = str.split('');
    let counter = 0;
    let highestCounter = [0, 'sth'];
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        for (let j = i; j < arr.length; j++) {
            if (temp === arr[j]) {
                counter++;
            }
            if (temp !== arr[j]) {
                break;
            }
        }
        if (counter > highestCounter[0]) {
            highestCounter[0] = counter;
            highestCounter[1] = temp;
        }
        counter = 0;
    }

    let str1 = '';
    for (let i = 0; i < highestCounter[0]; i++){
        str1 += highestCounter[1];
    }
    console.log(str1);
}