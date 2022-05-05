
function change(){
    const section = document.createElement('section');
    const div = document.createElement('div');
    const container = document.createElement('container');
    const buttonAdd = document.createElement('button');
    const buttonRem= document.createElement('button');
    const numero = document.createElement('p')
    
    let cantNumero = 0;
    
console.log(typeof(cantNumero))
    const textAgregar = document.createTextNode('Agregar 1');
    const textQuitar= document.createTextNode('Quitar 1')
    const textCounter= document.createTextNode('0')

    buttonAdd.appendChild(textAgregar);
    buttonRem.appendChild(textQuitar);
    numero.appendChild(textCounter);
    div.appendChild(numero);

    section.appendChild(div)
    container.appendChild(buttonAdd);
    container.appendChild(buttonRem);


    

    document.body.appendChild(section);
    document.body.appendChild(container);


    buttonAdd.addEventListener('click',(event)=>{
        console.log('jala');
        ++cantNumero
        numero.textContent=cantNumero;
        console.log(cantNumero)
    });
    buttonRem.addEventListener('click',(event)=>{
        console.log('jala');
        --cantNumero
        numero.textContent=cantNumero;
        console.log(cantNumero)
    });
    

}
change()
