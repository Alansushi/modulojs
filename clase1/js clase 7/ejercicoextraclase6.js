//funcion para generar un numero random, y que el usuario lo adivine
function ranNumber (){
    let ranNum = Math.floor(Math.random() * 11) + 0;
    console.log('el numero random es: ', ranNum)
    adivinanza(ranNum)
 }
 ranNumber()

//funcion para dar pistas al usuario o indicar que le atino
function adivinanza(ranNum){
let intentos = 5
for (let index = 0; index < intentos; index++) {
    let userNum = prompt('Adivina el numero del 1 al 10, solo tienes 5 intentos para adivinarlo, te daremos algunas pistas')
        if (userNum < ranNum){
                console.log('Pista: Tu numero esta abajo del numero random')
        }
        else if (userNum > ranNum){
                console.log('Pista: Tu numer esta arriba del numero random')
        }
        else if (userNum == ranNum){
                console.log ('Le atinaste al mismo nùmero')
                index = intentos
        }
                
            
}
alert('AGOTASTE TUS INTENTOS MI BUEN')
}