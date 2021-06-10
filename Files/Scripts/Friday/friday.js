let addToForm7 = document.getElementById('add-Appointment-Form');
let appointmentsList7 = document.getElementById('appointments-List');
let clearBtn7 = document.getElementById('clear');
let appointmentField7 = document.getElementById('appointmentField');
let fridayArray = localStorage.getItem('friday') ? JSON.parse(localStorage.getItem('friday')) : [];

localStorage.setItem('friday', JSON.stringify(fridayArray));
let fridayData = JSON.parse(localStorage.getItem('friday'));

let liMaker7 = text7 => {
    let li7 = document.createElement('li');
    li7.textContent = text7;
    appointmentsList7.appendChild(li7);
}

addToForm7.addEventListener('submit', function (e) {
    e.preventDefault();

    fridayArray.push(appointmentField7.value);
    localStorage.setItem('friday', JSON.stringify(fridayArray));
    liMaker7(appointmentField7.value);
    appointmentField7.value = '';
});

fridayData.forEach(note7 => {
    liMaker7(note7);
});

clearBtn7.addEventListener('click', function () {
    localStorage.clear();
    while (appointmentsList7.firstChild) {
        appointmentsList7.removeChild(appointmentsList7.firstChild);
    };
})
