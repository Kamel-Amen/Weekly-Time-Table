let addToForm6 = document.getElementById('add-Appointment-Form');
let appointmentsList6 = document.getElementById('appointments-List');
let clearBtn6 = document.getElementById('clear');
let appointmentField6 = document.getElementById('appointmentField');
let thursdayArray = localStorage.getItem('thursday') ? JSON.parse(localStorage.getItem('thursday')) : [];

localStorage.setItem('thursday', JSON.stringify(thursdayArray));
let thursdayData = JSON.parse(localStorage.getItem('thursday'));

let liMaker6 = text6 => {
    let li6 = document.createElement('li');
    li6.textContent = text6;
    appointmentsList6.appendChild(li6);
}

addToForm6.addEventListener('submit', function (e) {
    e.preventDefault();

    thursdayArray.push(appointmentField6.value);
    localStorage.setItem('thursday', JSON.stringify(thursdayArray));
    liMaker6(appointmentField6.value);
    appointmentField6.value = '';
});

thursdayData.forEach(note6 => {
    liMaker6(note6);
});

clearBtn6.addEventListener('click', function () {
    localStorage.clear();
    while (appointmentsList6.firstChild) {
        appointmentsList6.removeChild(appointmentsList6.firstChild);
    };
})
