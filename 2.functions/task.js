function getArrayParams (...array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  let sum =  [...array].reduce(function (a, b) {
    return a+b;
    });
  
  let avg = +(sum/array.length).toFixed(2);
  
   return "min: " + min + ", " + "max: " + max + ", " + "avg: " + avg;
  }
  
  getArrayParams (1, 2, 3, -100, 10);



function summElementsWorker (...array) {
    let sum = [...array].reduce(function (a, b) {
      return a+b;
      });
      return sum; 

  
}
summElementsWorker (10, 10, 11, 20, 10);


function differenceMaxMinWorker (...array) {

  let min = Math.min(...array);
  let max = Math.max(...array);
  
  return (max-min);

}

differenceMaxMinWorker (10, 10, 11, 20, 10);


function differenceEvenOddWorker (...array) {
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

differenceEvenOddWorker (10, 10, 11, 20, 10);


function averageEvenElementsWorker (...array) {
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
 
 averageEvenElementsWorker (10, 10, 11, 20, 10);




 function makeWork (...arrOfArr, afunc) {
  let arrOfArr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]]; 
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
   
    if (arrOfArr[i] > maxWorkerResult) {
      maxWorkerResult = arrOfArr[i];
    }
    }
  
   return  maxWorkerResult;
   
  }
  
  
  
  makeWork (arrOfArr, summElementsWorker);


