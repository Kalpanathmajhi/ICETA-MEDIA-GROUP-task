//There are two way's in which we can declare function in java script 1. Normal function declaration  2. Arrow Function
//1.Normal function(design to peform a particular task)
function add2Numbers(a, b) {
    return a + b;
  }
  
  let sum = add2Numbers(5, 7);
  console.log(sum);  //output - 12
  

  //Arrow function ( less syntax )
  const add2NumbersArrow = (a, b) => a + b;

  console.log(add2NumbersArrow(5, 3)); //output - 8 
  