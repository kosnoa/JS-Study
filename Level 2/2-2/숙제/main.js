$('#login').click(function() {
    $('.black-bg').addClass('show-modal');
});

$('#close').click(function() {
    $('.black-bg').removeClass('show-modal');
});



$('form').on('submit', function(e) {

    if (document.getElementById('username').value == "") {
        e.preventDefault();
        alert('아이디입력안함');
    } else if (document.getElementById('password').value == "") {
        e.preventDefault();
        alert('비밀번호입력안함');
    } else if (document.getElementById('password').value.length < 6) {
        e.preventDefault();
        alert('비밀번호가 6자리 이상이여야 합니다');
    } else {
        alert('전송되었습니다');
    }
});

var cnt = 0;
$('.badge').on('click', function() {
    cnt++;
    if (cnt % 2 == 1) {
        $('.badge').removeClass('bg-dark');
        $('.badge').addClass('bg-light');
        document.getElementById('mode').innerHTML = "Light 🔄";
    } else {
        $('.badge').removeClass('bg-light');
        $('.badge').addClass('bg-dark');
        document.getElementById('mode').innerHTML = "Dard 🔄";
    }
});

var 이름 = 'kim'; // 재선언 O | 재할당 O | 범위 function
let 이름2 = 'kim'; // 재선언 X | 재할당 O | 범위 {}
const 이름3 = 'kim'; // 재선언 X | 재할당 O | 범위 {}

setTimeout(function(){
    console.log('안녕') 
}, 1000) // 사용 방법: setTimeout(function(){실행코드}, ms)

var count = 5;

setInterval(function(){
    count -= 1;
    if (count >= 0)
    {
        document.querySelector('#time-text').innerHTML =  count;
    }
    else{
        setTimeout(function(){$('.alert').hide();}, 0);
    }
}, 1000);

// setInterval(function(){}, ms) X초 마다 코드실행
// setInterval(function(){console.log('잘가');}, 1000)

/* 
자바스크립트 문법
if var function

브라우저 사용법 (Web Browser API)
document.querySelector()
setTimeout()
alert()
*/
function 함수(){console.log('얘도 됨')}
setTimeout(함수, 1000)
// addEventListener(함수) 이것도 가능 