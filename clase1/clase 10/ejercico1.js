// -obtener el score promeddio de cada materia (HTML, CSS, JS, ReactJS)

// -obtener el promedio individual de cada mentor
// -crear un array de strings con la siguiente forma:

//     "Mi nombre es {nombre} y mi promedio es de {promedio}"
// -obtener la lista de mentores cuyo promedio sea mayor a 9.5 




const mentorsArray = [
    {
        name:"Ivan",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"Alejandra",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Alan",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Oscar",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]


//Empieza el ejercicio 2//
let ivan = 0
let alejandra= 0
let alan = 0
let oscar = 0
let i4 = 0
let signQty = mentorsArray[i4].scores.length

let mentProm = []
console.log('\n- - - Ejercicio # 2 - - -');
  mentorsArray.forEach((mentor)=>{
      mentor.scores.forEach((calificacion)=>{
          if (mentor.name === "Ivan"){
            ivan += calificacion.score;
          }
          else if(mentor.name === "Alejandra"){
            alejandra += calificacion.score;
          }
          else if(mentor.name === "Alan"){
            alan += calificacion.score;
          }
          else if(mentor.name === "Oscar"){
            oscar += calificacion.score;
          }
      })
      
  })

console.log(ivan,alejandra,alan, oscar)
const res = {
    ivan : ivan / signQty,
    alejandra: alejandra/signQty,
    alan : alan / signQty,
    oscar: oscar / signQty,
    
}

console.log(res)

let listaRes =[res]
mentorsArray.forEach((mentor)=>{
    if(mentor.name === "Ivan"){
        mentProm.push('Mi nombre es : '+mentor.name+' y mi promedio es:'+res.ivan)
    }
    else if(mentor.name === "Alejandra"){
        mentProm.push('Mi nombre es : '+mentor.name+' y mi promedio es:'+res.alejandra)
    }
    else if(mentor.name === "Alan"){
        mentProm.push('Mi nombre es : '+mentor.name+' y mi promedio es:'+res.alan)
    }
    else if(mentor.name === "Oscar"){
        mentProm.push('Mi nombre es : '+mentor.name+' y mi promedio es:'+res.oscar)
    }
})


console.log(mentProm)
console.log(listaRes)

let mejores=[]

listaRes.forEach((calif)=>{
    if (calif.ivan > 9){
        mejores.push(res.ivan)
    }
    else if(calif.alejandra > 9){
        mejores.push(res.alejandra)
    }
    else if(calif.alan > 9){
        mejores.push(res.alan)
    }
    else if(calif.oscar > 9){
        mejores.push(res.oscar)
    }
})
console.log(mejores)


//Empieza el ejercicio 1//
console.log('\n- - - Ejercicio # 1 - - -');

let promHtml = 0
let promCss = 0
let promJs = 0
let promReactJs=0

let mentoresQty = mentorsArray.length

mentorsArray.forEach((mentor)=>{
    mentor.scores.forEach((calificacion)=>{
        
        if (calificacion.signature === "HTML"){
            promHtml+= calificacion.score;
        }
        else if (calificacion.signature === "CSS"){
            promCss+= calificacion.score;
        }
        else if (calificacion.signature === "JS"){
            promJs+= calificacion.score;
        }
        else if (calificacion.signature === "ReactJS"){
            promReactJs+= calificacion.score;
        }
    })

})

const resultado = {
    promHtml : (promHtml / mentoresQty),
    promCss : promCss /mentoresQty,
    promJs : promJs / mentoresQty,
    promReactJs : promReactJs / mentoresQty,
}

console.log(resultado)






