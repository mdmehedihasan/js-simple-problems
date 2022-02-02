// normal array in sum
let array = [23, 45, 35, 65, 45, 6];
let total = 0;
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    total = total + element;
}
console.log(total);

//// array as a parameter in function

function arrayfunc(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

let finalSum = arrayfunc([23, 45, 65, 43, 65]);
console.log(finalSum);