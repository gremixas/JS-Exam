/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
    this.sum = function (a, b) {
      return a + b;
    }
    this.subtraction = function (a, b) {
      return a - b;
    }
    this.multiplication = function (a, b) {
      return a * b;
    }
    this.division = function (a, b) {
      return a / b;
    }
  }
  
  const calc = new Calculator();
  
  console.log(calc.sum(20, 13)); // 33
  console.log(calc.subtraction(20, 13)); // 7
  console.log(calc.multiplication(20, 13)); // 260
  console.log(calc.division(20, 13)); // 1.5384615384615385
  
  