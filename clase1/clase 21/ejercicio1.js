const mentorsArray = [
    {
        name:"Ivan Lopez Banda",
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
        ],
        promedio: 8
    },
    {
        name:"Alejandra Guzman Olvera",
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
        ],
        promedio: 8
    },
    {
        name:"Alan Guerrero García",
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
        ],
        promedio: 8
    },
    {
        name:"Oscar Diaz Alarcon",
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
        ],
        promedio: 8
    },
    {
        name:"Pedro Diaz Alarcon",
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
        ],
        promedio: 8
    }
]

const table = document.createElement('table');
const tHead = document.createElement('thead');
const tBody = document.createElement('tbody');

table.appendChild(tHead)
table.appendChild(tBody)
document.body.appendChild(table)

const createTableHead = ()=>{
    const trHead = document.createElement('tr')
    const tdName = document.createElement('td')
    const tdHTML = document.createElement('td')
    const tdCSS = document.createElement('td')
    const tdJS = document.createElement ('td')
    const tdReactJS = document.createElement('td')
    const tdPromedio = document.createElement('td')
    const tdAccion = document.createElement('td')

    tdName.textContent='Nombre'
    tdHTML.textContent='HTML'
    tdCSS.textContent='CSS'
    tdJS.textContent='JS'
    tdReactJS.textContent='ReactJS'
    tdPromedio.textContent='Promedio'
    tdAccion.textContent='Acción'

    trHead.appendChild(tdName)
    trHead.appendChild(tdHTML)
    trHead.appendChild(tdCSS)
    trHead.appendChild(tdJS)
    trHead.appendChild(tdReactJS)
    trHead.appendChild(tdPromedio)
    trHead.appendChild(tdAccion)

    tHead.appendChild(trHead)

    



}


const createRow = (mentorInfo,index)=>{
    const tr = document.createElement('tr')

    const tdName = document.createElement('td')

    tdName.textContent = mentorInfo.name
    tr.appendChild(tdName)

    mentorInfo.scores.forEach((signature)=>{
        const tdSignature = document.createElement('td')

        tdSignature.textContent=signature.score

        tr.appendChild(tdSignature)
    })
    const tdPromedio = document.createElement('td');
    tdPromedio.textContent = mentorInfo.promedio;
    tr.appendChild(tdPromedio)

    const button = document.createElement('button')
    button.textContent='Eliminar';
    button.setAttribute('data-mentor',index)

    button.addEventListener('click',(event)=>{
        console.log(event.target.dataset.mentor)
        const indexRemove =event.target.dataset.mentor

        mentorsArray.splice(indexRemove,1)
        while (tBody.children.length>0){
            tBody.lastChild.remove()
        }
        console.log(mentorsArray)
        createTable(mentorsArray)
    })
    tr.appendChild(button)

    tBody.appendChild(tr)
}



createTableHead();
const createTable =(mentorList)=>{
    
    mentorList.forEach((mentor,index)=>{
        createRow(mentor,index)
    })
    
}

createTable(mentorsArray)