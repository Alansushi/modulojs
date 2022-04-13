function tabla(){
    let num = prompt('Introduce un Numero paro :')
    let result = num.charCodeAt();
    console.log('El valor de tu caracter es: ', result)
    tablamultiplicacion(result)

}

function tablamultiplicacion(result){
    let index = 0
    let lastdigit = 11
    for (let index = 0; index < lastdigit; index++) {
        console.log('Tu número por:', index, 'es: ')
        console.log(result*index)
        
        
    }
}

tabla()