var count = 0;

$('.badge').on('click', function() {
    count += 1;
    if (count % 2 == 1) {
        $('.badge').html('Light');
    } else {
        $('.badge').html('Dark')
    }
});