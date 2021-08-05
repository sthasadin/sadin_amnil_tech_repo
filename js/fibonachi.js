var number = 6;

let a1 = 0, a2 = 1, temp;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(a1);
    temp = a1 + a2;
    a1 = a2;
    a2 = temp;
}