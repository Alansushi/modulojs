/*
Ejercicio:
*/
const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
  ]
  
  // - Agrupar el nombres de la bandas, que no esten repetidas
  // - Agrupar las canciones por banda
  // - La cancion con más reproducciones
  // - La cancion con más likes

  
function bandGroup(songsData){
    let uniqueBandas = [];
    songsData.forEach((cancion) => {
        if (!uniqueBandas.includes(cancion.band)) {
            uniqueBandas.push(cancion.band);
        }
    })
    return uniqueBandas
  }

let agrupacion = bandGroup(songsData)
console.log(agrupacion)

function bandSongs(cancion){
    let manaSongs= []
    let enanitosSongs=[]
    let jaguaresSongs=[]
    cancion.forEach((rola)=>{
        if (rola.band === 'Maná'){
            manaSongs.push(rola.name)
        }
        if (rola.band === 'Enanitos Verdes'){
            enanitosSongs.push(rola.name)
        }
        if (rola.band === 'Jaguares'){
            jaguaresSongs.push(rola.name)
        }
    })
    return{
        maná: manaSongs,
        enanitosVerdes: enanitosSongs,
        jaguares: jaguaresSongs, 
    }
}
let recopilacion = bandSongs(songsData)
console.log(recopilacion) 



function filterReprodSongs(rola){
    let mostReprodSongs = []
    //meter funcion para encontrar num mas alto de reprod en una variable
    let highestReprod = 0
    rola.forEach((info)=>{
        let reprod = (info.statistics.reproductions) 
        
        if (reprod > highestReprod){
            
            highestReprod= reprod
            
        }
        
    })
    rola.forEach((info)=>{
        let reprod = (info.statistics.reproductions) 
        if (reprod === highestReprod){
            mostReprodSongs.push({canción:info.name, reproducciones: highestReprod})
        }
    })
    
    
    return mostReprodSongs
}

let topReprodSongs = filterReprodSongs(songsData)
console.log (topReprodSongs)

function filterLikedSongs(rola){
    let mostLikedSongs = []
    //meter funcion para encontrar num mas alto de reprod en una variable
    let highestLikesQty = 0
    rola.forEach((info)=>{
        let likes = (info.statistics.likes) 
        
        if (likes > highestLikesQty){
            
            highestLikesQty= likes
            
        }
        
    })
    
    rola.forEach((info)=>{
        let likes = (info.statistics.likes)  
        if (likes === highestLikesQty){
            mostLikedSongs.push({canción:info.name, likes: highestLikesQty})
        }
    })
    
    
    return mostLikedSongs
}

let topLikedSongs = filterLikedSongs(songsData)
console.log (topLikedSongs)