console.log('Factorial');
var num = 6;

    var result = num;
    function factorial(){
    if (num === 0 || num === 1) {
    console.log('1');
    }
    else{
      console.log(num);
    while (num > 1) { 
      num--;
      result *= num;
      console.log(result);
    }
}
    
};
