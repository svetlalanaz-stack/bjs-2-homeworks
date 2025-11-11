function getArrayParams(...array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  let sum = [...array].reduce(function (a, b)) => a+b;
  
  let avg = +(sum/array.length).toFixed(2);
  
   return { min: min, max: max, avg: avg };
  }



function summElementsWorker(...array) {
    
  let sum = [...array].reduce(function (a, b)) => a+b;
      
  return sum; 

  
}

function differenceMaxMinWorker(...array) {

  let min = Math.min(...array);
  let max = Math.max(...array);
  
  return max-min;

}


function differenceEvenOddWorker(...array) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  let arrayDifferenceEvenOdd = [...array];
  for (let i = 0; i < arrayDifferenceEvenOdd.length; i++) {
    if (arrayDifferenceEvenOdd[i] % 2 == 0) {
      sumEvenElement += arrayDifferenceEvenOdd[i];
    } else {
      sumOddElement += arrayDifferenceEvenOdd[i];
    }
  }

return sumEvenElement-sumOddElement;
}



function averageEvenElementsWorker(...array) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  let arrayAverageEvenElements = [...array];
  for (let i = 0; i < arrayAverageEvenElements.length; i++) {
    if (arrayAverageEvenElements[i] % 2 == 0) {
      sumEvenElement += arrayAverageEvenElements[i];
      countEvenElement += 1;
    }
   
   }

 return sumEvenElement/countEvenElement;
 }
 

 function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
    for (let i = 0; i < arrOfArr.length; i++) {
      const arr = func(...arrOfArr[i]);
      if (arr > maxWorkerResult) {
      maxWorkerResult = arr;
    }
  }
  
  return maxWorkerResult
   
  }
  



