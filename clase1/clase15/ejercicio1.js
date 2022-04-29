const koders = [
    {
      name: "Harold",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 80
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
    {
      name: "Arnold",
      lastName: "Osborn",
      birthday: "1998/05/12",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    },
    {
      name: "Peter",
      lastName: "Parker",
      birthday: "1994/10/26",
      generation: 10,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 100
        },
        {
          module: "Backend",
          score: 95
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
    {
      name: "Homer",
      lastName: "Simpson",
      birthday: "1996/06/24",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 98
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 70
        }
      ]
    },
    {
      name: "Ren",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 80
        },
        {
          module: "Backend",
          score: 90
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    }
  ];
  
  // Teniendo la siguiente coleccion de koders genera una coleccion de objetos de tipo koder
  // Agregando ademas las siguientes funciones:
  
  // Prototipo koder
  
  // -Obtener la edad a partir de la fecha de nacimiento
  // -Obtener promedio de sus scores -----
  // -Tenga el name
  // -Tenga el lastName
  // -bootcamp
  
  // ----------
  
  // Obtener una coleccion de Koder que pertenezca a Javascript
  // Obtener una coleccion de Koder que pertenezca a Python
console.log(koders)
///////////////////////////////////////////////7
function calcularEdad (birthday){

  const currentYear = new Date ().getFullYear();
  const birthdayYear = birthday.split('/')[0];
  const age = currentYear - Number(birthdayYear)
  return age
}


function Koder (name, lastName,bootcamp, birthday, scores ){
        this.name = name;
        this.lastName = lastName;
        this.bootcamp = bootcamp;
        this.edad = calcularEdad(birthday);
        this.promedio = promedio(scores);
        
  
    
}
const promedio = (scores)=>{
  const promedio = scores.reduce((accum,item)=>{
    
      return accum += item.score;
  },0)
  
  const resuktado = promedio /scores.length
  
  
  return resuktado
}


const koderListInstance = koders.map((koder)=>{
  const{name,lastName,generation,birthday,scores} = koder;
  const koderInstance = new Koder(name,lastName,generation,birthday,scores)
  return koderInstance
})
console.log (koderListInstance)


class Koder {
  constructor(name){
    this.name = name;
  }
  saludar(){
    return`hola soy ${this.name}`
  }
}
const koder1= new Koder ('Alanduki')
koder1.saludar()


  
  
  
  
  
  