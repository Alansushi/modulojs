let grade = prompt('Introduce una calificación de las siguientes (A,B,C,D,E)')

switch (grade){
    case '60':
        console.log('Tu calificación es E')
        break;
    case '70':
        console.log('Tu calificación es de D')
        break;
    case '80':
        console.log('Tu calificación es de C')
    case '90':
        console.log('Tu calificación es de B')
        break;
    case '100':
        console.log('Tu calificación es de A')
        break;
    default :
        console.log('tas reprobado mano')
}