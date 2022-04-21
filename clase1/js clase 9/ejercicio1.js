let estudiantes = [
        'Jason Vorhees',
        'Penny Wise',
        'Freddy Krueger',
]

let usuarios = []

estudiantes.forEach(( item, index, arr ) => {
    info =('koder'+ (index+1) +': '+ item);
    usuarios.push(info)
})



console.log(usuarios)


