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


// input 이벤트는 <input>에 입력한 값이 바뀔 때 발생
// document.getElementById('username').addEventListener('input', function() {
//     console.log('안녕');
// });

// change 이벤트는 <input>에 입력한 값이 바뀌고 "포커스를 잃을 때" 발생
// document.getElementById('username').addEventListener('change', function() {
//     console.log('안녕');
// });