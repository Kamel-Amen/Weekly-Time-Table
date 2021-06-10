let addToForm5 = document.getElementById('add-Appointment-Form');
let appointmentsList5 = document.getElementById('appointments-List');
let clearBtn5 = document.getElementById('clear');
let appointmentField5 = document.getElementById('appointmentField');
let wednesdayArray = localStorage.getItem('wednesday') ? JSON.parse(localStorage.getItem('wednesday')) : [];

localStorage.setItem('wednesday', JSON.stringify(wednesdayArray));
let wednesdayData = JSON.parse(localStorage.getItem('wednesday'));

let liMaker5 = text5 => {
    let li5 = document.createElement('li');
    li5.textContent = text5;
    appointmentsList5.appendChild(li5);
}

addToForm5.addEventListener('submit', function (e) {
    e.preventDefault();

    wednesdayArray.push(appointmentField5.value);
    localStorage.setItem('wednesday', JSON.stringify(wednesdayArray));
    liMaker5(appointmentField5.value);
    appointmentField5.value = '';
});

wednesdayData.forEach(note5 => {
    liMaker5(note5);
});

clearBtn5.addEventListener('click', function () {
    localStorage.clear();
    while (appointmentsList5.firstChild) {
        appointmentsList5.removeChild(appointmentsList5.firstChild);
    };
})
