// obtnener los inputs con un selector para obtener el value
// obtener el boton de submit con un selector
// agregar un listener al boton con el evento de click
// crear un objeto con el nombre y apellido
// agregar el objeto de los inputs a una array
// crear los elementos con el contenido del array
    // -el elemento debe tener el nombre de la persona
    // -un boton para eliminar
    //     -agregarle un listener al boton de eliminar

// [
//     {
//         nombre:
//         apellido:
//     }
// ]


const onPostRequest = (person) => {

    const xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                xhr.response
            }
        }
    });

    const URL_FIREBASE = 'https://koders-88d77-default-rtdb.firebaseio.com/equipoComidas.json';

    xhr.open('POST', URL_FIREBASE );
    xhr.send(JSON.stringify(person));
};






const inputs = document.querySelectorAll('.form-control');
const button = document.querySelector('#createPerson');
const ul = document.querySelector('ul');

let person = {};
const personList = []

inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        if(event.target.name === 'nombre') {
            person.nombre = event.target.value
        } else {
            person.apellido = event.target.value
        }
    });
});

button.addEventListener('click', (event)=>{
    personList.push(person);
    console.log(personList)
    // aqui se tiene que hacer la peticion post
    onPostRequest(person);
    person = {};
    onGetRequest()
});

const createLi = (person, index) => {
    
    const li = document.createElement('li');
    li.classList.add('list-group-item')
    ul.appendChild(li);
    const text = document.createTextNode(`${person.nombre} ${person.apellido}`);
    li.appendChild(text);
    
    const button = document.createElement('button');
    button.classList.add('btn-danger');
    button.classList.add('btn');
    button.setAttribute('data-index', index)
    button.textContent = 'Eliminar'
    li.appendChild(button)
    button.addEventListener('click', (event) => {
        const removeIndex = event.target.dataset.index;
        personList.splice(removeIndex, 1);
        renderList()
    });
};

const renderList = (responseList) => {
    while(ul.children.length > 0) {
        ul.firstChild.remove()
    }
    responseList.forEach((person, index) => {
        createLi(person, index)
    });
    console.log(responseList)
};


document.body.appendChild(ul)

const onGetRequest = (person) => {

    const xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let remoteRenderList = []

                console.log(xhr.response)
                console.log(xhr.property)
                const response = JSON.parse(xhr.response);
                console.log(response)

                for(let property in response ) {
                    response[property]
                    console.log(response[property])
                    remoteRenderList.push(response[property])
                }

                renderList(remoteRenderList)
            
            }
        }
    });

    const URL_FIREBASE = 'https://koders-88d77-default-rtdb.firebaseio.com/equipoComidas.json';

    xhr.open('GET', URL_FIREBASE );
    xhr.send();
    
};

onGetRequest()

const onDeleteRequest = (person) => {

    const xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
               
                const response = JSON.parse(xhr.response);
                

                // for(let child in response ) {
                //     response[child]
                //     console.log(response[child])
                    
                // }

                
            
            }
        }
    });

    const URL_FIREBASE = 'https://koders-88d77-default-rtdb.firebaseio.com/equipoComidas/-N1ps_iIzLTaQHYg9ZdF.json';

    xhr.open('DELETE', URL_FIREBASE );
    xhr.send();
    
};

onDeleteRequest()





