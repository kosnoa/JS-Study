$('#login').click(function() {
    $('.black-bg').addClass('show-modal');
});

$('#close').click(function() {
    $('.black-bg').removeClass('show-modal');
});

function validation(e) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
        e.preventDefault();
        alert("빈칸을 채워주세요")
    } else {
        alert("전송되었습니다")
    }
};