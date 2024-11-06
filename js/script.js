$(document).ready(function () {
    
    // arrays de artistas y de categorias
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
    

    // CARRUSEL DE IMÁGENES HOME
    let selectedArtist = null;
    let selectedCateg = null;

    // para que recoja el input de a qué le das y lo ponga en negrita
    $('.dropdown-item[data-artist]').click(function() {
        event.preventDefault();
        event.stopPropagation();

        selectedArtist = $(this).data('artist');

        $('.dropdown-item[data-artist]').removeClass('selected');
        $(this).addClass('selected');

        updateCarousel();
    });

    $('.dropdown-item[data-categ]').click(function() {
        event.preventDefault();
        event.stopPropagation();

        selectedCateg = $(this).data('categ');

        $('.dropdown-item[data-categ]').removeClass('selected');
        $(this).addClass('selected');

        updateCarousel();
    });

    // aquí básicamente ve qué tiene que devolverte dependiendo del input
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

        // y aquí te crea tantas imagenes como elementos tenga que mostrar dependiendo de los inputs
        imagesToShow.forEach(function (imageSrc) {
            const imageDiv = $('<div class="col-3"></div>');
            const imageElement = $('<img>', {
                src: imageSrc,
                alt: '',
            });

            imageDiv.append(imageElement);
            $('#home-crsl').append(imageDiv);
            $('#product-buttons.crsl-arrows div').css('color', 'var(--f)');
        });
        updateItemsDropdown();
    }

    // el dropdown de items solo se muestra cuando has seleccionado artista y categoria (que no sea 'todos')
    // coge la url de las imagenes que se estan mostrando y muestra los nombres sin el webp y transformando las _ en espacios
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
                const menuItem = $('<li class="itemName"><a class="dropdown-item" href="#">' + imageName + '</a></li>');
                itemsMenu.append(menuItem);
                menuItem.attr('data-image', imageUrl);        
            });

            // esto es para que al hacer hover en un item, el resto se baje la opacidad
            $('.itemName').hover(
                function() {
                    const imageUrl = $(this).attr('data-image');
                    $('#home-crsl .col-3 img').each(function() {
                        if ($(this).attr('src') === imageUrl) {
                            $(this).css('opacity', '1');
                        } else {
                            $(this).css('opacity', '0.5');
                        }
                    });
                    $('.itemName').each(function() {
                        if ($(this).attr('data-image') === imageUrl) {
                            $(this).css('opacity', '1');
                        } else {
                            $(this).css('opacity', '0.5');
                        }
                    });
                },
                function() {
                    $('#home-crsl .col-3 img').css('opacity', '1');
                    $('.itemName').css('opacity', '1');
                }
            );
        } else {
            itemsButton.addClass('disabled')
        }
    }


    // para que el menu se abra por encima de las cosas con una altura
    $('.my-header-btn').click(function() {
        $('#header').css('height', '50%')
        headerHeight();
    });
    function headerHeight() {
        if ($('.btn.show').length === 0) {
            $('#header').css('height', '9%');
        }
    }


    // manejo del carrusel del home con drag
    const crsl = $('#home-crsl');
    let isDragging = false;
    let startX;
    let scrollLeft;

    crsl.on('mousedown', function (e) {
        isDragging = true;
        startX = e.pageX - crsl.offset().left;
        scrollLeft = crsl.scrollLeft();
    });

    $(document).on('mouseup', function () {
        isDragging = false;
    });

    crsl.on('mouseleave', function () {
        if (isDragging) {
            isDragging = false;
        }
    });
    

    // manejo del carrusel del home con flechitas
    crsl.on('mousemove', function (e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - crsl.offset().left;
        const walk = (x - startX) * 1.3; 
        crsl.scrollLeft(scrollLeft - walk);
    });

    function scrollCarousel(direction) {
        const scrollAmount = crsl.width() * 0.3; 
        const currentScroll = crsl.scrollLeft();
        crsl.animate({
            scrollLeft: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount
        }, 300); 
    }

    $('.arrow.left').on('click', function() {
        scrollCarousel('left');
    });
    $('.arrow.right').on('click', function() {
        scrollCarousel('right');
    });
    

    // manejo del carrusel del home con scroll
    crsl.on('wheel', function(e) {
        e.preventDefault();
        const delta = e.originalEvent.deltaY; 
        const scrollAmount = 10; 

        crsl.scrollLeft(crsl.scrollLeft() + (delta > 0 ? scrollAmount : -scrollAmount));
    });


    // Seleccionar todas las imágenes dentro de #gallery-main
    $("#gallery-main img").click(function(){
        var imagenSrc = $(this).attr("src");

        // Obtener todas las imágenes dentro de #gallery-main
        var relatedImages = $("#gallery-main img").map(function(){
            return $(this).attr("src");
        }).get();

        // Determinar el índice de la imagen actual
        var carouselIndex = relatedImages.indexOf(imagenSrc);

        // Crear el HTML del carrusel
        var carouselHtml = `
            <div id='carousel'>
                <img class='carousel-image' src='${imagenSrc}' />
                <div class='carousel-arrow carousel-arrow-left'>[←]</div>
                <div class='carousel-arrow carousel-arrow-right'>[→]</div>
            </div>
        `;
        
        // Añadir el carrusel al cuerpo del documento
        $("body").append(`
            <div id='imagenGrandeDiv' style='position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(10,10,10,0.9);display:flex;justify-content:center;align-items:center;cursor:pointer;z-index:10'>
                ${carouselHtml}
            </div>
        `);
        
        // Funcionalidad de los botones de flecha
        $('.carousel-arrow-right, .carousel-arrow-left').click(function(event) {
            event.stopPropagation();
            if ($(this).hasClass('carousel-arrow-right')) {
                carouselIndex = (carouselIndex + 1) % relatedImages.length;
            } else {
                carouselIndex = (carouselIndex - 1 + relatedImages.length) % relatedImages.length;
            }
            $('.carousel-image').attr('src', relatedImages[carouselIndex]);
        });
    
        // Funcionalidad de las teclas del teclado
        $(document).keydown(function(event) {
            if ($('#imagenGrandeDiv').length) {
                switch (event.which) {
                    case 37: // Tecla de flecha izquierda
                        carouselIndex = (carouselIndex - 1 + relatedImages.length) % relatedImages.length;
                        break;
                    case 39: // Tecla de flecha derecha
                        carouselIndex = (carouselIndex + 1) % relatedImages.length;
                        break;
                    case 27: // Esc para cerrar
                        $('#imagenGrandeDiv').remove();
                        return;
                }
                $('.carousel-image').attr('src', relatedImages[carouselIndex]);
            }
        });
        
        // Cerrar el carrusel al hacer clic fuera del carrusel
        $("#imagenGrandeDiv").click(function(){
            $('#imagenGrandeDiv').remove();
        });
    
        // Evitar que los clics en las flechas cierren el carrusel
        $(".carousel-arrow").click(function(event){
            event.stopPropagation();
        });
    });
    

    // Al hacer clic en #product-bt-info
    $("#product-bt-info").click(function() {
        var productInfo = $("#product-info");
        var isVisible = productInfo.hasClass("visible");

        // Alternar la clase 'visible' en #product-info
        productInfo.toggleClass("visible");

        // Ajustar las posiciones de las otras secciones
        if (!isVisible) {
            $("#product-box").css("top", "14%");      // 54% - 40% (altura de #product-info)
            $("#gallery-main").css("top", "-31%");    // 9% - 40%
            $("#header").css("top", "-40%");          // 0 - 40%
            $("#product-bt-info div").text("- info");      // Cambiar el texto a "-"
        } else {
            $("#product-box").css("top", "54%");      // Posición original
            $("#gallery-main").css("top", "9%");      // Posición original
            $("#header").css("top", "0");             // Posición original
            $("#product-bt-info div").text("+ info");      // Cambiar el texto a "+"
        }
    });   


});

