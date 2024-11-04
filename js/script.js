$(document).ready(function () {
    
    const artists = {
        depresionsonora: [
            'media/ds_elarte_ep.webp',
            'media/ds_elarte_cami.webp',
            'media/ds_elarte_sud.webp',
            'media/ds_makinavaja_ep.webp',
            'media/ds_makinavaja_cami.webp',

        ],
        carolinadurante: [
            'media/cd_elige_lp.webp',
            'media/cd_hamb_cami.webp',
            'media/cd_4chav_lp.webp',
            'media/cd_cd_lp.webp',
            'media/cd_elige_cami.webp',
        ]
    };

    const items = {
        vinilos: [
            'media/ds_elarte_ep.webp',
            'media/ds_makinavaja_ep.webp',
            'media/cd_4chav_lp.webp',
            'media/cd_elige_lp.webp',
            'media/cd_cd_lp.webp',
        ],
        camis: [
            'media/ds_elarte_cami.webp',
            'media/ds_makinavaja_cami.webp',
            'media/cd_hamb_cami.webp',
            'media/cd_elige_cami.webp',
        ],
        sudaderas: [
            'media/ds_elarte_sud.webp',
        ]
    };
    
     $('.dropdown-item[data-artist]').on('click', function () {
        event.preventDefault(); // Prevent the default link behavior
        event.stopPropagation();
        const selectedArtist = $(this).data('artist');
         $('.dropdown-item[data-artist]').removeClass('selected');

        // Mark the clicked item as selected
        $(this).addClass('selected');
        const images = artists[selectedArtist];

        // Clear the carousel
        $('#home-crsl').empty();

        // Check if there are images for the selected artist
        if (images && images.length > 0) {
            images.forEach(function (imageSrc) {
                const imageDiv = $('<div class="col-3"></div>');
                const imageElement = $('<img>', {
                    src: imageSrc,
                    alt: '',
                });
                
                imageDiv.append(imageElement);
                $('#home-crsl').append(imageDiv);
            });
        }
    });

    // Handle items dropdown
    $('.dropdown-item[data-items]').on('click', function () {
        const selectedItem = $(this).data('items');
        const images = items[selectedItem];

        // Clear the carousel
        $('#home-crsl').empty();

        // Check if there are images for the selected item
        if (images && images.length > 0) {
            images.forEach(function (imageSrc) {
                const imageDiv = $('<div class="col-3"></div>');
                const imageElement = $('<img>', {
                    src: imageSrc,
                    alt: '',
                });

                imageDiv.append(imageElement);
                $('#home-crsl').append(imageDiv);
            });
        }
    });


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





});

