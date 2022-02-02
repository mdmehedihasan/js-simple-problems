//largest number find

let array = [45, 44, 98, 09];
let largestNumber = array[0];
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element > largestNumber) {
        largestNumber = element;
    }

}
console.log('largest number is:', largestNumber);


//lowest number find
let array2 = [45, 44, 98, 09];
let lowestNumber = array[0];
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element < lowestNumber) {
        lowestNumber = element;
    }

}
console.log('lowest number is:', lowestNumber);


