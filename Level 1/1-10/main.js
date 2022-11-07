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