// aplicar filtro por signature
// input : 'Js'

// output:
//   {
//        signature: 'Js',
//        koders: [
//           'ivan',
//           'isra'
//        ],
//       mentor: 'ivan diaz'
//   }

// input: "Freddy";
// output: ["Js", "HTML", "React"];




//aqui empieza la lista de información
const generacion18 = [
    {
      signature: "Js",
      koders: ["ivan", "Freddy"],
      mentor: "ivan diaz"
    },
    {
      signature: "HTML",
      koders: ["jason", "penny", "Freddy"],
      mentor: "Alan "
    },
    {
      signature: "CSS",
      koders: ["arnold", "ferald"],
      mentor: "Alan "
    },
    {
      signature: "Introduccion",
      koders: ["steve", "Charlie"],
      mentor: "Elvira "
    },
    {
      signature: "React",
      koders: ["ivan", "Harry", "Freddy"],
      mentor: "Alejandra"
    }
  ]
  

//expresione sregulares de bbusqueda
let javascript = (/javascript/gi);
let lenhtml = /html/gi;
let  css = /css/gi;
let react = /react/gi;
let intro = /introduccion/gi;

let materia 

function filtroMateria(){
    let materia = prompt('Escribe la materia sobre la cual quieres información:')
    // iterarcaso(materia)
    if (materia.match(javascript)){
        console.log(generacion18[0])
    }
    else if (materia.match(lenhtml)){
        console.log(generacion18[1])
    }
    else if (materia.match(css)){
        console.log(generacion18[2])
    }
    else if (materia.match(react)){
        console.log(generacion18[4])
    }
    else if (materia.match(intro)){
        console.log(generacion18[3])
    }
}

filtroMateria()


