$(document).ready(function () {
    
    const artists = {
        depresionsonora: [
            'media/El_Arte_De_Morir_Muy_Despacio_-_LP.webp',
            'media/El_Arte_De_Morir_Muy_Despacio_-_Camiseta.webp',
            'media/El_Arte_De_Morir_Muy_Despacio_-_Sudadera.webp',
            'media/Makinavaja_-_EP.webp',
            'media/Makinavaja_-_Camiseta.webp',

        ],
        carolinadurante: [
            'media/Elige_Tu_Propia_Aventura_-_LP.webp',
            'media/Hamburguesas_-_Camiseta.webp',
            'media/Cuatro_Chavales_-_LP.webp',
            'media/Carolina_Durante_-_LP.webp',
            'media/Elige_Tu_Propia_Aventura_-_Camiseta.webp',
        ]
    };

    const categs = {
        vinilos: [
            'media/El_Arte_De_Morir_Muy_Despacio_-_LP.webp',
            'media/Makinavaja_-_EP.webp',
            'media/Cuatro_Chavales_-_LP.webp',
            'media/Elige_Tu_Propia_Aventura_-_LP.webp',
            'media/Carolina_Durante_-_LP.webp',
        ],
        camis: [
            'media/El_Arte_De_Morir_Muy_Despacio_-_Camiseta.webp',
            'media/Makinavaja_-_Camiseta.webp',
            'media/Hamburguesas_-_Camiseta.webp',
            'media/Elige_Tu_Propia_Aventura_-_Camiseta.webp',
        ],
        sudaderas: [
            'media/El_Arte_De_Morir_Muy_Despacio_-_Sudadera.webp',
        ]
    };
    
    let selectedArtist = null;
    let selectedCateg = null;

    function updateCarousel() {
        $('#home-crsl').empty();

        if (!selectedArtist && !selectedCateg) return; 

        let imagesToShow = [];

        if (selectedCateg === 'todo') {
            if (selectedArtist && artists[selectedArtist]) {
                imagesToShow = artists[selectedArtist];
            } else {
                Object.values(artists).forEach(images => {
                    imagesToShow = imagesToShow.concat(images);
                });
            }
        } else {
            if (selectedArtist && artists[selectedArtist]) {
                imagesToShow = artists[selectedArtist];
            }
            
            if (selectedCateg && categs[selectedCateg]) {
                if (imagesToShow.length > 0) {
                    imagesToShow = imagesToShow.filter(image => categs[selectedCateg].includes(image));
                } else {
                    imagesToShow = categs[selectedCateg];
                }
            }
        }

        imagesToShow.forEach(function (imageSrc) {
            const imageDiv = $('<div class="col-3"></div>');
            const imageElement = $('<img>', {
                src: imageSrc,
                alt: '',
            });

            imageDiv.append(imageElement);
            $('#home-crsl').append(imageDiv);
        });
        updateItemsDropdown();
    }

    function updateItemsDropdown() {
        const itemsButton = $('.items'); 
        const itemsMenu = itemsButton.siblings('.dropdown-menu');

        if (selectedArtist && selectedCateg && selectedCateg !== 'todo') {
        itemsButton.removeClass('disabled')
        itemsMenu.empty();

        $('#home-crsl .col-3 img').each(function() {
            const imageUrl = $(this).attr('src');  
            const imageName = imageUrl.split('/').pop()
                .replace(/_/g, ' ') 
                .replace(/\.webp$/, '');  
            const menuItem = $('<li><a class="dropdown-item" href="#">' + imageName + '</a></li>');
            itemsMenu.append(menuItem);
        });
        
    } else {
        itemsButton.addClass('disabled')
    }
    }


    $('.dropdown-item[data-artist]').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        selectedArtist = $(this).data('artist');

        $('.dropdown-item[data-artist]').removeClass('selected');
        $(this).addClass('selected');

        updateCarousel();
    });

    $('.dropdown-item[data-categ]').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        selectedCateg = $(this).data('categ');

        $('.dropdown-iem[data-categ]').removeClass('selected');
        $(this).addClass('selected');

        updateCarousel();
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

