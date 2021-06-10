let addToForm3 = document.getElementById('add-Appointment-Form');
let appointmentsList3 = document.getElementById('appointments-List');
let clearBtn3 = document.getElementById('clear');
let appointmentField3 = document.getElementById('appointmentField');
let mondayArray = localStorage.getItem('monday') ? JSON.parse(localStorage.getItem('monday')) : [];

localStorage.setItem('monday', JSON.stringify(mondayArray));
let mondayData = JSON.parse(localStorage.getItem('monday'));

let liMaker3 = text3 => {
    let li3 = document.createElement('li');
    li3.textContent = text3;
    appointmentsList3.appendChild(li3);
}

addToForm3.addEventListener('submit', function (e) {
    e.preventDefault();

    mondayArray.push(appointmentField3.value);
    localStorage.setItem('monday', JSON.stringify(mondayArray));
    liMaker3(appointmentField3.value);
    appointmentField3.value = '';
});

mondayData.forEach(note3 => {
    liMaker3(note3);
});

clearBtn3.addEventListener('click', function () {
    localStorage.clear();
    while (appointmentsList3.firstChild) {
        appointmentsList3.removeChild(appointmentsList3.firstChild);
    };
})
