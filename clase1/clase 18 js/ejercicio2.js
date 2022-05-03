const mentorsArray = [
    {
        name:"Ivan",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"Alejandra",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Alan",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Oscar",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]
const creartTable = (mentorsArray) =>{
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const trHead = document.createElement('tr');

    const thName = document.createElement('th');
    const thHtml = document.createElement('th');
    const thCss = document.createElement('th');
    const thJavascript = document.createElement('th');
    const thReact = document.createElement('th')
    const thPromedio = document.createElement('th')

    const textName = document.createTextNode('NOMBRE')
    const textHtml = document.createTextNode('HTML')
    const textCss = document.createTextNode('CSS')
    const textJavascript = document.createTextNode('JS')
    const textReact = document.createTextNode('REACT')
    const textPromedio = document.createTextNode('PROMEDIO')
    //se asignan los textos de los headers de la tabla//
    thName.appendChild(textName);
    thHtml.appendChild(textHtml);
    thCss.appendChild(textCss);
    thJavascript.appendChild(textJavascript);
    thReact.appendChild(textReact);
    thPromedio.appendChild(textPromedio);
    //se asigna los elementos principales a la tabla//
    table.appendChild(thead);
    table.appendChild(tbody)
    //se asignan elementos headers a la tabla ya con el texto//
    thead.appendChild(trHead);
    trHead.appendChild(thName);
    trHead.appendChild(thHtml);
    trHead.appendChild(thCss);
    trHead.appendChild(thJavascript);
    trHead.appendChild(thReact);
    trHead.appendChild(thPromedio);

    //se agrega la tabla al documento//
    document.body.appendChild(table);

    mentorsArray.forEach((mentor)=>{
        const trMentor = document.createElement('tr');

        const tdMentorName = document.createElement('td');
        
        //Tal vez la solución esta en hacer una función de recolección
        //de datos por cada materia y así pueda definir cada materia sin
        // hacer un ciclo for each en toda, or qué si no como generaría
        //la distinción entre cada variable?
        //revisar codigo de clase con fernanda en slack y su repo.

        // mentor.forEach((info)=>{
        //     const tdMentHtml = document.createElement('td');
        //     const tdMentCss = document.createElement('td');
        //     const tdMentJs = document.createElement('td');
        //     const tdMentReact = document.createElement('td');
        //     const tdMentProm = document.createElement('td');

        //     const textValueHtml = document.createTextNode(info.score);
        //     const textValueCss = document.createTextNode(info.score);

        //     tdMentHtml.appendChild(textValueHtml);

        //     trMentor.appendChild(tdMentHtml);

        // })
        
        const textValueName = document.createTextNode(mentor.name);
        

        tdMentorName.appendChild(textValueName);
        

        trMentor.appendChild(tdMentorName);
        // trMentor.appendChild(tdMentHtml);
        tbody.appendChild(trMentor);
    })
    
}

creartTable(mentorsArray)