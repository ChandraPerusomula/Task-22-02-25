/*Task:
   1.print numbers from 1-10 and 10-1
    without using < or > operators?
    ANS:-
    */

function printNumbers() {
    // 1 to 10
    let num = 1;
    while (true) {
      console.log(num);
      if (num === 10) {
        break;
      }
      num = num + 1;
    }
  
    // 10 to 1
    num = 10;
    while (true) {
      console.log(num);
      if (num === 1) {
        break;
      }
      num = num - 1;
    }
  }
  
  printNumbers();

/*
 2.print the sum of number upto 20
ANS:-
*/

  function sumUpTo20() {
    let sum = 0;
    let num = 1;
  
    while (true) {
      sum += num; // Equivalent to sum = sum + num
      if (num === 20) {
        break;
      }
      num++; // Equivalent to num = num + 1
    }
  
    console.log("The sum of numbers up to 20 is:", sum);
  }
  
  sumUpTo20();


  /*
3.print the sum of even numbers upto 50?
ANS:-
  */
  function sumOfEvenNumbersUpTo50() {
    let sum = 0;
    let num = 2; // Start with the first even number
  
    while (true) {
      sum += num;
      if (num === 50) {
        break;
      }
      num += 2; // Increment by 2 to get the next even number
    }
  
    console.log("The sum of even numbers up to 50 is:", sum);
  }
  
  sumOfEvenNumbersUpTo50();