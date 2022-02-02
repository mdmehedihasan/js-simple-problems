// 0 1 1 2 3 5 8 13

let first = 0;
let second = 1;
let count = 0;
let fibo = 0;

for (let i = 0; i < 10; i++) {
    if (i <= 1) {
        fibo = i;
        console.log(fibo);
    }
    else {
        first = second;
        second = fibo;
        fibo = first + second;
        console.log(fibo);
    }
}
