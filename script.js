var subjects;
var tutors;
var proficiencies;
var methods;
var dates;
var starttimes;
var endtimes;
var firstname;
var lastname;
var email;

function storeReservationInfo() {
    sessionStorage.setItem('subject', document.querySelector('#subject').value);
    sessionStorage.setItem('tutor', document.querySelector('#tutor').value);
    sessionStorage.setItem('starttime', document.querySelector('#starttime').value);
    sessionStorage.setItem('endtime', document.querySelector('#endtime').value);
    sessionStorage.setItem('date', document.querySelector('#date').value);

    var prof = document.getElementsByName('Proficiency');
    for (i = 0; i < prof.length; i++) {
        if (prof[i].checked) {
            sessionStorage.setItem('proficiency', prof[i].value);
        }
    }
    var method = document.getElementsByName('Method');
    for (i = 0; i < method.length; i++) {
        if (method[i].checked) {
            sessionStorage.setItem('method', method[i].value);
        }
    }
}

function storeClientInfo() {
    sessionStorage.setItem('firstname', document.querySelector('#firstname').value);
    sessionStorage.setItem('lastname', document.querySelector('#lastname').value);
    sessionStorage.setItem('email', document.querySelector('#email').value);
}

function changeLocationAndStore(location) {
    if (document.location.href == window.location.origin + '/bookasession.html') {
        storeReservationInfo();
    }
    else if (document.location.href == window.location.origin + '/enterdetails.html') {
        storeClientInfo();
    }
    document.location.href = location;
}

function fillReservationPage() {
    subjects = sessionStorage.getItem('subject');
    tutors = sessionStorage.getItem('tutor');
    proficiencies = sessionStorage.getItem('proficiency');
    methods = sessionStorage.getItem('method');
    dates = sessionStorage.getItem('date');
    starttimes = sessionStorage.getItem('starttime');
    endtimes = sessionStorage.getItem('endtime');
    firstname = sessionStorage.getItem('firstname');
    lastname = sessionStorage.getItem('lastname');
    email = sessionStorage.getItem('email');
    
    
    document.getElementById('reservationSubject').innerHTML += subjects;
    document.getElementById('reservationTutor').innerHTML += tutors;
    document.getElementById('reservationDateAndTime').innerHTML += dates + " from " + starttimes + " to " + endtimes;
    document.getElementById('reservationProficiency').innerHTML += proficiencies;
    document.getElementById('reservationTeachingMethod').innerHTML += methods;
    document.getElementById('reservationClientName').innerHTML += firstname + " " + lastname;
    document.getElementById('reservationClientEmail').innerHTML += email;
}