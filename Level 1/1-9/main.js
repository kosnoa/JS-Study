$('#login').click(function() {
    $('.black-bg').addClass('show-modal');
});

$(document).ready(function() {
    $("#close").click(function() {
        $(".black-bg").removeClass('show-modal');
    });
});

$('#send').onclick = function() {
    if ('#username' === '' || '#pass' === '') {
        alert('COMPLETE THE BLANK')
    } else {
        $('#move').submit
    }

}

// alert('안녕하세요')