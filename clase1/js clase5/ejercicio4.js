operaciones = ['suma', 'resta','división','multiplicación']




function numberssum(){
    let num1 = prompt ('Dame el primer número');
    let num2 = prompt ('Dame el segundo número');
    num1 = Number(num1);
    num2 = Number(num2);
    let ope = num1 + num2;
    answer(ope,num1,num2)
}

function numbersrest(){
    let num1 = prompt ('Dame el primer número');
    let num2 = prompt ('Dame el segundo número');
    num1 = Number(num1);
    num2 = Number(num2);
    ope = num1 - num2;
    answer(ope,num1,num2)
}
function numbersdiv(){
    let num1 = prompt ('Dame el primer número');
    let num2 = prompt ('Dame el segundo número');
    num1 = Number(num1);
    num2 = Number(num2);
    ope = num1 / num2;
    answer(ope,num1,num2)
}
function numbersmul(){
    let num1 = prompt ('Dame eml primer número');
    let num2 = prompt ('Dame el segundo número');
    num1 = Number(num1);
    num2 = Number(num2);
    ope = num1 * num2;
    answer(ope,num1,num2)
}

function answer(ope,num1,num2){
    console.log('El resultado de tu operación es: ',ope, 'Tus números fueron: ',num1, num2)
}

let regsum = /suma/gi; 

function choose(){
    
    console.log(operaciones)
    let decision = prompt('¿Cuál de las siguientes operaciones quieres realizar?')
    switch (decision){
        case decision.includes(regsum):
            numberssum();
            break
        case 'resta':
            numbersrest();
            break
        case 'division':
            numbersdiv();
            break
        case 'multiplicación':
            numbersmul();
            break

        default :
        console.log('Tas loco mano')

    }
}
choose()