

const buttons = document.querySelectorAll('.btn');
const counterElement = document.querySelector('#counter');


console.log(counterElement)

let counter = 0;
console.log(counter)
buttons.forEach( (button,) => {
    button.addEventListener('click', (event)=>{
        console.log('si jala')
        const operationType = event.target.dataset.operation;
        operationType === 'suma' ? ++counter : --counter
        counterElement.textContent = counter;
        buttons[1].disabled = counter <= 0 ? true : false;
    });
});