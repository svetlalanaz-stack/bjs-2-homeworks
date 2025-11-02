function getArrayParams (...array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  let sum =  [1, 2, 3, -100, 10].reduce(function (a, b) {
    return a+b;
    });
  
  let avg = +(sum/array.length).toFixed(2);
  
    console.log(min);
    console.log(max);
    console.log(sum);
    console.log(avg);
  console.log("min: " + min + ", " + "max: " + max + ", " + "avg: " + avg )
  }
  
  getArrayParams (1, 2, 3, -100, 10);



function summElementsWorker (...array1) {
    let sum = [10, 10, 11, 20, 10].reduce(function (a, b) {
      return a+b;
      });
      console.log(sum); 

  
}
summElementsWorker (10, 10, 11, 20, 10);


function differenceMaxMinWorker (...array2) {

  let min = Math.min(...array2);
  let max = Math.max(...array2);
  
  console.log(max-min);

}

differenceMaxMinWorker (10, 10, 11, 20, 10);


function differenceEvenOddWorker (...array3) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  let arrayDifferenceEvenOdd = [10, 10, 11, 20, 10];
  for (let i = 0; i < arrayDifferenceEvenOdd.length; i++) {
    if (arrayDifferenceEvenOdd[i] % 2 == 0) {
      sumEvenElement += arrayDifferenceEvenOdd[i];
    }
    else {
      sumOddElement += arrayDifferenceEvenOdd[i];
    }
  }

console.log(sumEvenElement-sumOddElement);
}

differenceEvenOddWorker (10, 10, 11, 20, 10);


function averageEvenElementsWorker (...array4) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  let arrayAverageEvenElements = [10, 10, 11, 20, 10];
  for (let i = 0; i < arrayAverageEvenElements.length; i++) {
    if (arrayAverageEvenElements[i] % 2 == 0) {
      sumEvenElement += arrayAverageEvenElements[i];
      countEvenElement += 1;
    }
   
   }

 console.log(sumEvenElement/countEvenElement);
 }
 
 averageEvenElementsWorker (10, 10, 11, 20, 10);




