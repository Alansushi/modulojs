const buttonSubmit = document.querySelector("#submit");
const parrafo = document.querySelector('p');

let arrayUsers =  []
let deletedActivities = []
//se puede hacer con el submit, sin embargo al revisar en el formulario hay que poner el return onsubmit para que cargue la pagina
buttonSubmit.addEventListener("click", (event) => {
  //console.log("evento capturado")
  const nombre = document.querySelector("#nombre").value;
  const apellidos = document.querySelector("#apellidos").value;
  

  //const p_nombre = document.querySelector("#p_nombre");
  //const p_apellidos = document.querySelector("#p_apellidos");

  //p_nombre.textContent = nombre;
  //p_apellidos.textContent = apellidos;

  const ulPerson = document.createElement("ul");
  const liPerson = document.createElement('li');
  const spanPerson =document.createElement("span");
  const buttonPerson = document.createElement("button")
  buttonPerson.classList.add("delete");
  
  
  const firstName = document.createTextNode(nombre);
  const lastName = document.createTextNode(` ${apellidos}`);
  buttonPerson.textContent =`Eliminar`;
  //buttonPerson.setAttribute("data-mentor", index)
  const newObject = {
    name: nombre,
    lastName: apellidos
  } 
  arrayUsers.push(newObject)
  console.log(arrayUsers)


  spanPerson.appendChild(firstName);
  spanPerson.appendChild(lastName);
  spanPerson.appendChild(buttonPerson);
  liPerson.appendChild(spanPerson)  
  ulPerson.appendChild(liPerson)
  parrafo.appendChild(ulPerson)

  document.querySelector("#nombre").value='';
  document.querySelector("#apellidos").value='';


arrayUsers.forEach((item, index) => {
  buttonPerson.setAttribute('data-indexB', index)

  
})


  buttonPerson.addEventListener("click", (event) => {
    
    const indexRemove = event.target.dataset.indexB;
    
    //console.log("evento capturado")
  ulPerson.removeChild(liPerson)
  arrayUsers.splice(indexRemove, 1)  
  console.log(arrayUsers)
  deletedActivities.push(spanPerson)
  console.log(deletedActivities)
  
})



});
