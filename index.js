//Function 1
function calculatePerimeter(length, width) {
    length = parseFloat(prompt('Enter the length of a rectangle in cm'));
    width = parseFloat(prompt('Enter the width of a triangle in cm'));

    let roomPerimeter = (length * 2) + (width * 2);

    const container = document.getElementById('container')
    container.innerHTML = `<p> The perimeter of your rectangle is ${roomPerimeter} cm.`;
}

// calculatePerimeter()

// Function 2
let name1 = 'Engineer';

function workName(employeeName) {
    let salary = 200000;
    console.log(`${name1} ${employeeName} gets payed ${salary}`);
    return employeeName;
}

let myName = workName('Mike')
console.log(`${myName} is an ${name1}`)
console.log(`${name1} + 'gets payed ${Salary}'`)

// Function 3: Button to trigger animation

function animation() {
    const box = document.getElementById('box');
    box.classList.toggle('animate');
}

// Function to toggle CSS modal

function openmodal() {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');

    openModalBtn.addEventListener('click', () => {
        modal.classList.add('show');
    });
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}