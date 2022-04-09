let num1= prompt('introduce un número');
let num2= prompt('introduce otro número');

Number(num1)
Number(num2)

if (Number(num1) > Number(num2)){
  console.log(num1 + ' es mayor que ' + num2)
}
else {
   console.log(num2 + ' es mayor que ' + num1)
}
