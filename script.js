function addZero(e) {
    return (e = new Number(e)) < 10 ? "0" + e : e;
}

var current = document.getElementById('ndate');
current.value = new Date().getFullYear() + '-' + addZero(new Date().getMonth() + 1) + '-' + addZero(new Date().getDate());

var ordinalSuffix = (n) => {
    var s = ['th', 'st', 'nd', 'rd'];
    var v = n % 100;
    return n + ' <sup>' + (s[(v - 20) % 10] || s[v] || s[0]) + '</sup>';
};

function ageCalculator() {
    var userinput = document.getElementById('dob').value;
    var dob = new Date(userinput);
    var current = document.getElementById('ndate').value;
    var date = new Date(current);
    var result = document.getElementById('result');

    if (userinput == '') {
        result.style.background = 'black';
        result.style.color = 'white';
        result.innerHTML = 'Enter Date Of Birth Please!';
        return;
    }
    if (current == '') {
        result.style.background = 'black';
        result.style.color = 'white';
        result.innerHTML = 'Enter "Age at the Date of" Please!';
        return;
    }

    var dobtime = dob.getTime();
    var datetime = date.getTime();

    if (dobtime > datetime) {
        result.style.background = 'black';
        result.style.color = 'white';
        result.innerHTML = 'Invalid Date Input. Please Try Again!';
        return;
    }

    var differencetime = datetime - dobtime;

    var years = date.getFullYear() - dob.getFullYear();
    var months = date.getMonth() - dob.getMonth();
    var days = date.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (date.getMonth() == dob.getMonth() && date.getDate() == dob.getDate()) {
        result.style.background = 'green';
        result.style.color = 'white';
        result.innerHTML = '<font color="white" weight="bold">Happy ' + ordinalSuffix(years) + ' Birthday!</font>';
    } else {
        result.style.background = 'green';
        result.style.color = 'white';
        result.innerHTML = '<b>Age</b>:<br> ' + years + ' years ' + months + ' months ' + days + ' days';
    }
}

function handleKeydown(e) {
    switch (e.key) {
        case 'Enter':
            document.querySelector('.items').click();
            break;
        case 'SoftLeft':
        case 'F1':
        case 'Escape':
            ageCalculator();
            break;
        case 'F2':
        case 'SoftRight':
            exit();
            break;
        case 'ArrowUp':
            navigate(-1);
            break;
        case 'ArrowDown':
            navigate(1);
            break;
    }

}

function navigate(direction) {
    var focusable = document.querySelectorAll('.nav-item');
    var current = document.activeElement;
    var currentIndex = Array.prototype.indexOf.call(focusable, current);
    var nextIndex = currentIndex + direction;

    if (nextIndex < 0) {
        nextIndex = focusable.length - 1;
    } else if (nextIndex >= focusable.length) {
        nextIndex = 0;
    }

    focusable[nextIndex].focus();
}


function exit() {
    var text = 'Are You Sure Want To Exit This App?';
    if (confirm(text) == true) {
        window.close();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.nav-item').focus();
});

document.body.addEventListener('keydown', handleKeydown);
