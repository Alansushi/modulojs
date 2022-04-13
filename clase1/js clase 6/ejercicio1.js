

function randomNumber(){
    let usernum = prompt('Ingresa un número:');
    usernum = Number(usernum)

    let index = 0
    let password=[];
    //Aquí se crea la condición 
    for (let index = 0; index < usernum; index++) {
        //COntraseña que se va a crear
        
        //función para generar un número random entre 48 y 126
        let ranNum = Math.floor(Math.random() * 127) + 47;
        //función para convertir el número random a un caracter de la tabla ascii
        password += String.fromCharCode(ranNum);
        //imprimimos la variable con los carácteres guardados
        
        
        
    }
    console.log(password)
      
}
randomNumber()