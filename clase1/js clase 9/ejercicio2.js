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
    score: 8,
  },
  {
    koder: 'Thomas',
    score: 8,
  }
];

let promedio = 0;
let personas = calificaciones.length;


calificaciones.forEach((item,index,arr)=>{
    calif = calificaciones[index].score
    promedio += calif
})
let proGeneral = (promedio/personas);

console.log(Number(proGeneral))


function equivalencias(proGeneral){
    if (proGeneral == 8){
        console.log('Tu calificación es C')
    }
 }

equivalencias(proGeneral)