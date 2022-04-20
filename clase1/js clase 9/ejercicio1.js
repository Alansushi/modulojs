let estudiantes = [
        'Jason Vorhees',
        'Penny Wise',
        'Freddy Krueger',
]

let usuarios = []
let num = 1
estudiantes.forEach(( item, index, arr ) => {
    info =('koder'+ num++ +': '+ item);
    usuarios.push(info)
})



console.log(usuarios)


