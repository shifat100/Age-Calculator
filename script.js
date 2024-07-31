
function addZero(e){return(e=new Number(e))<10?"0"+e:e}


var current = document.getElementById('ndate');
current.value = new Date().getFullYear()+'-'+addZero(new Date().getMonth()+1)+'-'+addZero(new Date().getDate());


var ordinalSuffix = (n) => {
    var s = ['th', 'st', 'nd', 'rd']
    var v = n % 100;
    return n + ' <sup>' + (s[(v - 20) % 10] || s[v] || s[0]) + '</sup>';
};
function ageCalculator() {
    var userinput = document.getElementById('dob').value;
    var dob = new Date(userinput);
    var current = document.getElementById('ndate').value;
    var date = new Date(current);

    if (userinput == '') {
        document.getElementById('result').style.background = 'black';
        document.getElementById('result').innerHTML = 'Enter Date Of Birth Please!';
    }
    else if (current == '') {
        document.getElementById('result').style.background = 'black';
        document.getElementById('result').innerHTML = 'Enter Till Now Date Please!';
    }
    else {


        var datetime = date.getTime();
        var dobtime = dob.getTime();

        var differencetime = datetime - dobtime;

        var today = new Date(differencetime);
        var year_age = today.getFullYear() - 1970;
        var month_age = today.getMonth();

        var day_age = today.getDate();

        if (dob > date) {
            document.getElementById('result').style.background = 'black';
            document.getElementById('result').innerHTML = 'Invalid Date Input. Please Try Again!';
        }
        else if ((date.getMonth() == dob.getMonth()) && (date.getDate() == dob.getDate())) {
            document.getElementById('result').style.background = 'green';
            document.getElementById('result').innerHTML = '<font color="white" weight="bold">Happy ' + ordinalSuffix(year_age) + ' Birthday!</font>';
        }
        else {
            document.getElementById('result').style.background = 'green';
            document.getElementById('result').innerHTML = '<b>Age</b>:<br> ' + year_age + ' years ' + month_age + ' months ' + day_age + ' days';
        }
    }
}





function handleKeydown(e) {
    if (e.key == 'SoftRight' || e.key == 'F2') { exit(); }
}

function exit() {
    var text = 'Are You Sure Want To Exit This App?';
    if (confirm(text) == true) {
        window.close();
    } else { }
}

document.body.addEventListener('keydown', handleKeydown);

document.addEventListener('DOMContentLoaded', () => {
    getKaiAd({
        publisher: '080b82ab-b33a-4763-a498-50f464567e49',
        app: 'Age Calculator',
        slot: 'agecalculator',
        onerror: (err) => console.error('Custom catch:', err),
        onready: (ad) => {
            ad.call('display');
        },
    });
});