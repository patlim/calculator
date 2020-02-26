var entries = [];
var total = 0;

var temp = '';

function myClick(val) {
    // Got a number, add to temp
    if (Number.isInteger(val)) {
        temp += val;
        document.getElementById('answer').innerHTML=temp.substring(0,10);

        // Got some symbol other than equals, add temp to our entries
        // then add our current symbol and clear temp
    } else if (val === 'AC') {
        entries = [];
        temp = '';
        total = 0;
        document.getElementById('answer').innerHTML='hello'

        // Clear last entry
    } else if (val === 'CE') {
        temp = '';
        document.getElementById('answer').innerHTML='hello'

        // Change multiply symbol to work with eval
    } else if (val === 'x') {
        entries.push(temp);
        entries.push('*');
        temp = '';

        // Change divide symbol to work with eval
    } else if (val === '÷') {
        entries.push(temp);
        entries.push('/');
        temp = '';

        // Got the equals sign, perform calculation
    } else if (val === '=') {
        entries.push(temp);

        var nt = Number(entries[0]);
        for (var i = 1; i < entries.length; i++) {
            var nextNum = Number(entries[i+1])
            var symbol = entries[i];

            if (symbol === '+') { nt += nextNum; }
            else if (symbol === '-') { nt -= nextNum; }
            else if (symbol === '*') { nt *= nextNum; }
            else if (symbol === '/') { nt /= nextNum; }

            i++;
        }

        // Swap the '-' symbol so text input handles it correctly
        if (nt < 0) {
            nt = Math.abs(nt) + '-';
        }

        document.getElementById('answer').innerHTML=nt;
        entries = [];
        temp = '';

        // Push number
    } else {
        entries.push(temp);
        entries.push(val);
        temp = '';
    }
};
