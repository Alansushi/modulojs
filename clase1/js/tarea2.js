dolar = 0.0493
rupia = 3.789
euro = 0.045
dolarcana = 0.062



function pedircantidad(){
    let mxn = prompt('Ingresa la cantidad de dinero en Moneda Nacional que deseas convertir')
    mxn = Number(mxn)
    console.log('Esta es la lista de países a los cuales puedes viajar: ')
    console.log (' USA    India   Canadá   Francia')
    let country = prompt ('¿A qué país vas a viajar?')
    switch (country){
        case 'USA':
            console.log('Tus', mxn , ' pesos valdrán ', mxn * dolar, ' dolares.')
            break;
        case 'India':
            console.log('Tus', mxn,  ' pesos valdrán ', mxn * rupia, ' rupias.')
            break;
        case 'Francia':
            console.log('Tus', mxn,  ' pesos valdrán ', mxn * euro, ' euros.')
            break;
        case 'Canadá':
            console.log('Tus', mxn,  ' pesos valdrán ', mxn * dolarcana, 'dólares canadienses.')
            break;
        default:
            console.log('Indica un país')
    }
}   

pedircantidad()