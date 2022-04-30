let arrayPersons = [
    {
        name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
    },
    {
        name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, vaccinated: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, vaccinated: false, gender: "hombre"
    },
    {
        name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
    },
    {
        name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
    },
    {
        name: "Harold", age: 45, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
    },
    {
        name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
    },
    {
        name: "Lila", age: 18, vaccinated: true, gender: "mujer"
    },
    {
        name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
    },
]
let propiedades = [
    {
        name: "NOMBRE"
    },
    {
        age: "EDAD"
    },
    {
        vax: "VACUNADO"
    },
    {
        gender:"GÉNERO"
    }
]


/*
Usar reduce para obtener la siguiente informacion
- Un array con aquellas personas que se vacunaron
- la edad promedio de todos los vacunados
- un array con aquellas personas que se vacunaron y que son menores a 30 años
- la edad promedio de los no vacunados
- el porcentaje de vacunados vs no vacunados
- el procentaje de mujeres que se vacunaron
- el porcentaje de los hombres que vacunarion
*/
function filterVaxxed (arrayPersons){
    let result = arrayPersons.reduce((accum,item)=>{
        if (item.vaccinated === true){
            return [...accum,item]
        }
        return accum
    },[])
    return result
}
let filteredVaxxed = filterVaxxed(arrayPersons)
console.log('Estas personas estàn vacunadas ', filteredVaxxed)
console.log( ' Total de personas en la lista', arrayPersons.length)
function ageVaxxed (filteredVaxxed){
    let result =filteredVaxxed.reduce((accum,item)=>{
        return accum += item.age
    },0)
    return result/filteredVaxxed.length
}
let avgagevaxxed =  ageVaxxed (filteredVaxxed)
console.log('El promedio de edad de personas vacuandas es',avgagevaxxed,'años')
function below30(filteredVaxxed){
    let result = filteredVaxxed.reduce((accum,item)=>{
        if (item.age < 30){
            return [...accum, item]
        }
        return accum
    },[])
    return result
}
let vaxxedBelow30 = below30(filteredVaxxed)
console.log ('Estas personas están vacunadas y tienen menos de 30 años ', vaxxedBelow30)
function filterNoVaxxed (arrayPersons){
    let result = arrayPersons.reduce((accum,item)=>{
        if (item.vaccinated === !true){
            return [...accum,item]
        }
        return accum
    },[])
    return result
}
let noVaxx = filterNoVaxxed (arrayPersons)
console.log(noVaxx)
function ageNoVaxxed (noVaxx){
    let result =noVaxx.reduce((accum,item)=>{
        return accum += item.age
    },0)
    return result/noVaxx.length
}
console.log('El número de personas no vacunadas es: ', noVaxx.length)
let avgAgeNoVaxxed =  ageNoVaxxed (noVaxx)
console.log('El promedio de edad de personas  no vacuandas es de: ',avgAgeNoVaxxed,' años')
function getPorcentajeVaxxed (filteredVaxxed){
    let resultVaxxed = ('Porcentaje de vacunados',(filteredVaxxed.length*100)/arrayPersons.length)
    return resultVaxxed
}
let porcentajeVaxxed = getPorcentajeVaxxed (filteredVaxxed)
console.log( 'El porcentaje de vacuandos es de: ', porcentajeVaxxed,'%')
function getPorcentajeNoVaxxed (noVaxx){
    let resultNoVaxxed = ('Porcentaje de no vacunados',(noVaxx.length*100)/arrayPersons.length)
    return resultNoVaxxed
}
let porcentajeNoVaxxed = getPorcentajeNoVaxxed (noVaxx)
console.log('El porcentaje de no vacuandos es de: ',porcentajeNoVaxxed, '%')
function getMenVaxx(filteredVaxxed){
    let result = filteredVaxxed.reduce((accum,item)=>{
        if(item.gender === 'hombre'){
            return [...accum,item]
        }
        return accum
    },[])
    return result
}
let menVaxxed=getMenVaxx(filteredVaxxed)
console.log('Hombres que si se vacunaron ',menVaxxed)
function getWomenVaxx(filteredVaxxed){
    let result = filteredVaxxed.reduce((accum,item)=>{
        if(item.gender === 'mujer'){
            return [...accum,item]
        }
        return accum
    },[])
    return result
}
let womenVaxxed=getWomenVaxx(filteredVaxxed)
console.log('Mujeres que si se vacunaron ',womenVaxxed)
/// empieza ejercico de tabla//
// const ul = document.createElement('ul');

// const createNode = (name)=>{
    
//     const li = document.createElement('li');
//     const koderName = document.createTextNode(name);
//     li.appendChild(koderName);
//     ul.appendChild(li);
//     document.body.appendChild(ul)
// };

// koders.forEach((item)=>{
//     createNode(item)
// })
const createHeaders =(dato)=>{
const thNombre = document.createElement ("th");
const thEdad = document.createElement ("th");
const thVacunado = document.createElement ("th");
const thGenero = document.createElement ("th");
const tr = document.createElement("tr");

tr.appendChild(thNombre);
tr.appendChild(thEdad);
tr.appendChild(thVacunado);
tr.appendChild(thGenero);
document.body.appendChild(table)

thNombre.appendChild(document.createTextNode(dato.name))
thEdad.appendChild(document.createTextNode(dato.edad))
thVacunado.appendChild(document.createTextNode(dato.vax))
thGenero.appendChild(document.createTextNode(dato.gender))
}
const headers = (propiedades)=>{
    propiedades.forEach((item)=>{
        createHeaders(item)
        
        
    })
}
headers(propiedades)




const createTable = (persona)=>{

    const table = document.createElement("table");
    const tBody = document.createElement("tBody");
    const tr = document.createElement("tr");
    const trTitulos = document.createElement("tr");
    const th = document.createElement ("th");
    const tdName = document.createElement("td");
    const tdAge = document.createElement("td");
    const tdVaxx = document.createElement("td");
    const tdGender = document.createElement("td");

    
    
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdVaxx);
    tr.appendChild(tdGender);
    tBody.appendChild(tr);
    table.appendChild(tBody);
    document.body.appendChild(table)

    tdName.appendChild(document.createTextNode(persona.name))
    tdAge.appendChild(document.createTextNode(persona.age))
    tdVaxx.appendChild(document.createTextNode(persona.vaccinated))
    tdGender.appendChild(document.createTextNode(persona.gender))
};

const getInfo = (arrayPersons)=>{
    arrayPersons.forEach((item)=>{
        createTable(item)
        
        
    })
}
getInfo(arrayPersons)

document.body.appendChild(promedioEdad)
const promedioEdad = document.createElement("p")
promedioEdad.appendChild(avgagevaxxed)


