function solve(arr) {
    let counter = 0;
    let highestCounter = 0;
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
        if (counter > highestCounter) {
            highestCounter = counter;
        }
        counter = 0;
    }

    console.log(highestCounter);
}