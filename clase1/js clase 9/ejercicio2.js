let calificaciones=
[
  {
    koder: 'Arnold',
    score: 8,
  },
  {
    koder: 'Gerald',
    score: 8,
  },
  {
    koder: 'Gelga',
    score: 8,
  },
  {
    koder: 'Peer',
    score: 11,
  },
  {
    koder: 'Thomas',
    score: 10,
  }
];

let promedio = 0;
let personas = calificaciones.length;


calificaciones.forEach((item,index,arr)=>{
    calif = item.score
    promedio += calif
})
let proGeneral = (promedio/personas);

console.log(Number(proGeneral))


function equivalencias(proGeneral){
    if (proGeneral == 8){
        console.log('Tu calificación grupal es C')
    }
    else if (proGeneral ==6){
        console.log('Tu calificación grupal es F')
    }
    else if (proGeneral == 7){
        console.log('Tu calificación grupal es D')
    }
    else if (proGeneral == 9){
      console.log('Tu calificación grupal es B')
    }
    else if (proGeneral == 10){
      console.log('Tu calificación grupal es A')
    }
 }

equivalencias(proGeneral)