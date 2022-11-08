// Q1 
let age = 19;
const locate = '부산';

// Q2
var name = 'park';
var id = 0;

function showName() {
    var name = 'kim';
    var id = 1;
    console.log(name);
}

showName();
console.log(id);

// output:
// showName(); => 'kim'
// console.log(id); => 0


// Q3
var 예금액 = 60000;
var 미래예금액 = 0;


if (예금액 < 50000) {
    미래예금액 = 예금액 * 1.15 * 1.15;

} else {
    미래예금액 = 예금액 * 1.2 * 1.2;
}

console.log(미래예금액);


// Q4
var first = 360;
var second = first * (2 / 3);
var third = second * (2 / 3);
console.log(first + second + third);

var total = first + first * (2 / 3) + first * (2 / 3) * (2 / 3);
console.log(total);

// Q5
var cnt = 0;
console.log(cnt);
document.querySelector('#send-answer').addEventListener('click', function() {
    cnt++;
    var ans = document.querySelector('#answer').value;
    if (ans == '1335') {
        alert('성공');
    } else if (cnt >= 3 && ans != '1335') {
        alert('멍청아');
    }
});