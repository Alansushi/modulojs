let arrayPersons = [
    {
        name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
    },
    {
        name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, vaccinated: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, vaccinated: false, gender: "hombre"
    },
    {
        name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
    },
    {
        name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
    },
    {
        name: "Harold", age: 45, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
    },
    {
        name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
    },
    {
        name: "Lila", age: 18, vaccinated: true, gender: "mujer"
    },
    {
        name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
    },
];





const creartTable = (arrayPersons) => {
console.log('seeeaea')
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const trHead = document.createElement('tr');

    const thName = document.createElement('th');
    const thAge = document.createElement('th');
    const thVacci = document.createElement('th');
    const thGender = document.createElement('th');

    const textName = document.createTextNode('name');
    const textAge = document.createTextNode('age');
    const textVacci = document.createTextNode('vaccinated');
    const textGender = document.createTextNode('gender');

    thName.appendChild(textName);
    thAge.appendChild(textAge);
    thVacci.appendChild(textVacci);
    thGender.appendChild(textGender);

    table.appendChild(thead);
    table.appendChild(tbody)

    thead.appendChild(trHead);
    trHead.appendChild(thName);
    trHead.appendChild(thAge);
    trHead.appendChild(thVacci);
    trHead.appendChild(thGender);
    
    document.body.appendChild(table);

    arrayPersons.forEach((persona) => {
        const trPerson = document.createElement('tr');

        const tdName = document.createElement('td');
        const tdAge = document.createElement('td');
        const tdVacci = document.createElement('td');
        const tdGender = document.createElement('td');

        const textValueName = document.createTextNode(persona.name);
        const textValueAge = document.createTextNode(persona.age);
        const textValueGender = document.createTextNode(persona.gender);

        const isVacci = persona.vaccinated === true ? 'vaccinated' : 'no vaccinated';
        const textVacci = document.createTextNode(isVacci);

        tdName.appendChild(textValueName);
        tdAge.appendChild(textValueAge);
        tdVacci.appendChild(textVacci);
        tdGender.appendChild(textValueGender)

        trPerson.appendChild(tdName);
        trPerson.appendChild(tdAge);
        trPerson.appendChild(tdVacci);
        trPerson.appendChild(tdGender);
        tbody.appendChild(trPerson);
    });
};

creartTable(arrayPersons) 
