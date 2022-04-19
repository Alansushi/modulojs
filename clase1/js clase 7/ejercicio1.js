function pares(){
    let user = prompt('Ingresa un número entre 1 y 10:');
    let num = Number(user)
    for (let index = 0; index < num; index++) {
        if (index % 2 == 0)
            console.log('Este número es par: ',index)
        
        
    }
}
pares()
