const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', ()=>{
    console.log(xhr);
})

xhr.open("GET", "https://rickandmortyapi.com/api/character" );
xhr.send();
console.log(xhr);
