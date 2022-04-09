let dato1 = prompt('Dame tu primer número entero')
let dato2 = prompt('Dame tu segundo número entero')
dato1 = Number(dato1)
dato2 = Number(dato2)
console.log('Los números introducidos son: ', dato1,' y ' ,dato2)
if (dato1 > dato2){
    console.log( 'La división de tus números es',dato1/dato2);
}
else if(dato1 < dato2){
    console.log( 'La suma de tus datos', dato1 + dato2)
}
else if(dato1 == dato2){
    console.log('La multiplicación de tus números es',dato1*dato2)
}