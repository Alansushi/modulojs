function sumnums(){
    let user = prompt('Ingresa un número de más de dos digitos');
    num = Number(user);
    console.log('Número ingresado: ', num)
    let sum = 0 , rem ;
    while(num){
    rem = num % 10
    
    sum = sum + rem
    
    num = Math.floor(num/10);
    }

    console.log('La suma de los dígitos de tu número es: ',sum)
        
        
    }

sumnums()