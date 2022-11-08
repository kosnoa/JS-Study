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