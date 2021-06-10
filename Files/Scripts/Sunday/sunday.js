let addToForm2 = document.getElementById('add-Appointment-Form');
let appointmentsList2 = document.getElementById('appointments-List');
let clearBtn2 = document.getElementById('clear');
let appointmentField2 = document.getElementById('appointmentField');
let sundayArray = localStorage.getItem('sunday') ? JSON.parse(localStorage.getItem('sunday')) : [];

localStorage.setItem('sunday', JSON.stringify(sundayArray));
let sundayData = JSON.parse(localStorage.getItem('sunday'));

let liMaker2 = text2 => {
    let li2 = document.createElement('li');
    li2.textContent = text2;
    appointmentsList2.appendChild(li2);
}

addToForm2.addEventListener('submit', function (e) {
    e.preventDefault();

    sundayArray.push(appointmentField2.value);
    localStorage.setItem('sunday', JSON.stringify(sundayArray));
    liMaker2(appointmentField2.value);
    appointmentField2.value = '';
});

sundayData.forEach(note2 => {
    liMaker2(note2);
});

clearBtn2.addEventListener('click', function () {
    localStorage.clear();
    while (appointmentsList2.firstChild) {
        appointmentsList2.removeChild(appointmentsList2.firstChild);
    };
})
