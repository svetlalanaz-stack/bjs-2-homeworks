"use strict";
function solveEquation (a,b,c) {
  let discr = (b**2)-4*a*c;

    if (discr == 0) {
      arr = [-b/(2*a)];
  }

    if (discr > 0) {
      arr =  [(-b + Math.sqrt(d))/(2*a), (-b - Math.sqrt(d) )/(2*a)] ;
    }

return arr;

}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percent = [0 - 1];
  let countMonths = 1;
  let contribution;
  let amount;
  let debtBody = amount - contribution;
  let monthPay = debtBody * (percent + (percent / (((1 + percent)**n) - 1)));
  let sum = +(monthPay + countMonths).toFixed(2);

  return sum;
}
