const $carousel = $('#home-crsl');
let isDragging = false;
let startX;
let scrollLeft;

$carousel.on('mousedown', function (e) {
    isDragging = true;
    startX = e.pageX - $carousel.offset().left;
    scrollLeft = $carousel.scrollLeft();
    $carousel.css('cursor', 'grabbing');
});

$(document).on('mouseup', function () {
    isDragging = false;
    $carousel.css('cursor', 'grab');
});

$carousel.on('mouseleave', function () {
    if (isDragging) {
        isDragging = false;
        $carousel.css('cursor', 'grab');
    }
});

$carousel.on('mousemove', function (e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - $carousel.offset().left;
    const walk = (x - startX) * 2; 
    $carousel.scrollLeft(scrollLeft - walk);
});
