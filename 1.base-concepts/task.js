"use strict";
function solveEquation (a,b,c) {
let discr = (b**2)-4*a*c;

if (discr < 0) {
  arr = [0];
  return arr;
}
if (discr == 0) {
  arr = [-b/(2*a)];
  return arr;

}
if (discr > 0) {
  arr =  [(-b + Math.sqrt(d))/(2*a)', '(-b - Math.sqrt(d) )/(2*a)] ;
  return arr;
}



}
