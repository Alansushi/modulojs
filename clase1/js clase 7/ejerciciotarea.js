let koders = [
    ['jose', 'de anda'],
    ['danny', 'vazquez'],
    ['Aaron','Enciso']
]

let resultado = []

for (let index = 0; index < koders.length; index++) {
    let nomArray = koders[index]
    let kodersNombreCompleto =nomArray
    for (let index2=0;index <= kodersNombreCompleto.length; index2++)
    kodersNombreCompleto = {
        nombre: nomArray[index2],
        apellido:nomArray[index2+1]
      
    }
    resultado.push(kodersNombreCompleto)
}
console.log(resultado)