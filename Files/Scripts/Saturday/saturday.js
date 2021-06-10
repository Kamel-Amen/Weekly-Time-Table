let addToForm = document.getElementById('add-Appointment-Form');
let appointmentsList = document.getElementById('appointments-List');
let clearBtn = document.getElementById('clear');
let appointmentField = document.getElementById('appointmentField');
let saturdayArray = localStorage.getItem('saturday') ? JSON.parse(localStorage.getItem('saturday')) : [];

localStorage.setItem('saturday', JSON.stringify(saturdayArray));
let saturdayData = JSON.parse(localStorage.getItem('saturday'));

let liMaker = text => {
    let li = document.createElement('li');
    li.textContent = text;
    appointmentsList.appendChild(li);
}

addToForm.addEventListener('submit', function (e) {
    e.preventDefault();

    saturdayArray.push(appointmentField.value);
    localStorage.setItem('saturday', JSON.stringify(saturdayArray));
    liMaker(appointmentField.value);
    appointmentField.value = '';
});

saturdayData.forEach(note => {
    liMaker(note);
});

clearBtn.addEventListener('click', function () {
    localStorage.clear();
    while (appointmentsList.firstChild) {
        appointmentsList.removeChild(appointmentsList.firstChild);
    };
})
