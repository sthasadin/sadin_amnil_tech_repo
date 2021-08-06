// var number = 6;

let a1 = 0, a2 = 1, temp;

console.log('Fibonacci Series:');

function fibo(){
number=prompt("enter number for fibonaci");
for (let i = 1; i <= number; i++) {
    temp = a1 + a2;
    a1 = a2;
    a2 = temp;
    console.log(a2); 
    
}
  return a2;
 
};
 document.write("fibonachi series: "+fibo(a2)+ "<br>");5
 

