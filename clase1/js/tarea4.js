/* Pedir nombre completo al usuario e indicarle cuantos caracteres tiene su nombre*/
let nombre = prompt('Introduce tu(s) nombre(s)')
let midname = prompt('Introduce tu primer apellido')
let lastname = prompt('Introduce tu último aellido')
let largo = 0

function completename(){
    let fullname = (nombre +' '+ midname +' '+ lastname);
    console.log ('Tu nombre completo es : ', fullname);
    let largo = fullname.length;
    console.log('Tu nombre tiene este número de carácteres con espacios: ', largo)
    console.log ('Tu nombre tiene este número de carácteres sin espacios: ', largo-3)
}
completename()
