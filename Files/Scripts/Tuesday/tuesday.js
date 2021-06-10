let addToForm4 = document.getElementById('add-Appointment-Form');
let appointmentsList4 = document.getElementById('appointments-List');
let clearBtn4 = document.getElementById('clear');
let appointmentField4 = document.getElementById('appointmentField');
let tuesdayArray = localStorage.getItem('tuesday') ? JSON.parse(localStorage.getItem('tuesday')) : [];

localStorage.setItem('tuesday', JSON.stringify(tuesdayArray));
let tuesdayData = JSON.parse(localStorage.getItem('tuesday'));

let liMaker4 = text4 => {
    let li4 = document.createElement('li');
    li4.textContent = text4;
    appointmentsList4.appendChild(li4);
}

addToForm4.addEventListener('submit', function (e) {
    e.preventDefault();

    tuesdayArray.push(appointmentField4.value);
    localStorage.setItem('tuesday', JSON.stringify(tuesdayArray));
    liMaker4(appointmentField4.value);
    appointmentField4.value = '';
});

tuesdayData.forEach(note4 => {
    liMaker4(note4);
});

clearBtn4.addEventListener('click', function () {
    localStorage.clear();
    while (appointmentsList4.firstChild) {
        appointmentsList4.removeChild(appointmentsList4.firstChild);
    };
})
