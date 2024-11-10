// LENIS
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);




$(document).ready(function () {

    // las movidas de bootstrap para el dark mode pero modificado
    // para que sea con un switch y para que cambie bien los colores
    (() => {
        'use strict'

        const getStoredTheme = () => localStorage.getItem('theme');

        const getPreferredTheme = () => {
        const storedTheme = getStoredTheme();
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        };

    const setTheme = theme => {
      if (theme === 'auto') {
        document.documentElement.setAttribute('data-bs-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme);
      }
    };

        const applySwitchState = theme => {
        document.getElementById('themeSwitch').checked = theme === 'dark';
        };

        setTheme(getPreferredTheme());
        applySwitchState(getPreferredTheme());

        document.getElementById('themeSwitch').addEventListener('change', function() {
            const theme = this.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-bs-theme', theme);
        
            if (theme === 'dark') {
                document.documentElement.style.setProperty('--bs-gray-900', '#fff'); 
                document.documentElement.style.setProperty('--bs-white', '#212529'); 
                document.documentElement.style.setProperty('--bs-gray-400', '#0f0f0f'); 
            } else {
                document.documentElement.style.setProperty('--bs-gray-900', '#212529'); 
                document.documentElement.style.setProperty('--bs-white', '#fff'); 
                document.documentElement.style.setProperty('--bs-gray-400', '#ced4da'); 
            }
        });

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme();
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme());
            applySwitchState(getPreferredTheme());
        }
        });

        window.addEventListener('DOMContentLoaded', () => {
        applySwitchState(getPreferredTheme());
        });
    })();
    

    // ARRAYS ARTISTAS Y CATEGORIAS
    const artists = {
        depresionsonora: [
            'media/El_Arte_De_Morir_Muy_Despacio_-_LP.webp',
            'media/El_Arte_De_Morir_Muy_Despacio_-_Camiseta.webp',
            'media/El_Arte_De_Morir_Muy_Despacio_-_Sudadera.webp',
            'media/Makinavaja_-_EP.webp',
            'media/Makinavaja_-_Camiseta_Manga_Larga.webp',
            'media/Depresión_Sonora_USA_Tour_-_Camiseta_.webp',
            'media/Depresión_Sonora_-_Zippo.webp',

        ],
        carolinadurante: [
            'media/Elige_Tu_Propia_Aventura_-_LP.webp',
            'media/Hamburguesas_-_Camiseta.webp',
            'media/Cuatro_Chavales_-_LP.webp',
            'media/Carolina_Durante_-_LP.webp',
            'media/Elige_Tu_Propia_Aventura_-_Camiseta.webp',
            'media/Carolina_Durante_-_Pin.webp',

        ],
        judeline: [
            'media/Judeline_-_Pareo.webp',
            'media/Judeline_-_Belly_Button_Piercing.webp',
            'media/D.B.C.A._-_Camiseta.webp',
            'media/Bodhiria_-_LP.jpg',
            'media/Niña_del_Sur_-_Camiseta.webp',
            'media/Judeline_-_Sudadera.webp',
            'media/Fuck_Marry_Kill_-_Sudadera.webp',
            'media/Fuck_Marry_Kill_-_Camiseta.webp',
        ],
        cariño: [
            'media/Cariño_-_Camiseta.webp',
            'media/Cariño_-_LP.webp',
            'media/Cariño_-_Sudadera.webp',
            'media/Tanto_Por_Hacer_-_Camiseta_Azul.webp',
            'media/Tanto_Por_Hacer_-_Camiseta_Marrón.webp',
            'media/Tanto_Por_Hacer_-_LP.webp',
            'media/Tanto_Por_Hacer_-_Sudadera_Gris.webp',
        ],
        laplata: [
            'media/Acción_Directa_-_LP.webp',
            'media/Sueños_-_LP.webp',
        ],
        camellos: [
            'media/Calle_Para_Siempre_-_LP.jpg',
            'media/Gran_Hostal_-_LP.jpg',
            'media/Manual_de_Estilo_-_LP.jpg',
            'media/Peligrosamente_-_Camiseta.jpg',
            'media/Camellos_-_Camiseta.jpg',
        ],
        corte: [
            'media/Corte!_-_EP.webp',
        ],
        mujeres: [
            'media/Aquellos_Ojos_-_Single.webp',
            'media/No_Volveré_-_Single.webp',
            'media/Trance_Continuo_-_LP.webp',
            'media/Un_Sentimiento_Importante_-_LP.webp',
            'media/Rock_y_Amistad_-_EP.webp',
        ],
        lospunsetes: [
            'media/AFDTRQHOT_-_Camiseta.webp',
            'media/AFDTRQHOT_-_LP.webp',
            'media/AFDTRQHOT_-_Sudadera.webp',
            'media/Los_Punsetes_-_Camiseta.webp',
            'media/Madrid_me_ataca_-_EP.webp',
            'media/QLDPCATA_-_Camiseta.webp',
            'media/Que_le_den_por_culo_a_tus_amigos_-_LP.webp',
        ],
        natalialacunza: [
            'media/Natalia_Lacunza_-_Camiseta.webp',
            'media/Tribal_Duro_-_Baby_Tee.webp',
            'media/Tiene_Que_Ser_Para_Mi_-_LP.jpg',
            'media/Duro_-_Sudadera.webp',
            'media/Otras_Alas_-_LP.jpg',
            'media/Duro_-_Gorra.webp',

        ]
    };

    const categs = {
        vinilos: [
            'media/El_Arte_De_Morir_Muy_Despacio_-_LP.webp',
            'media/Makinavaja_-_EP.webp',
            'media/Cuatro_Chavales_-_LP.webp',
            'media/Elige_Tu_Propia_Aventura_-_LP.webp',
            'media/Carolina_Durante_-_LP.webp',
            'media/Acción_Directa_-_LP.webp',
            'media/Cariño_-_LP.webp',
            'media/Bodhiria_-_LP.jpg',
            'media/Corte!_-_EP.webp',
            'media/Tiene_Que_Ser_Para_Mi_-_LP.jpg',
            'media/AFDTRQHOT_-_LP.webp',
            'media/Que_le_den_por_culo_a_tus_amigos_-_LP.webp',
            'media/Aquellos_Ojos_-_Single.webp',
            'media/No_Volveré_-_Single.webp',
            'media/Trance_Continuo_-_LP.webp',
            'media/Sueños_-_LP.webp',
            'media/Calle_Para_Siempre_-_LP.jpg',
            'media/Gran_Hostal_-_LP.jpg',
        ],
        cds: [
            'media/Makinavaja_-_EP.webp',
            'media/Elige_Tu_Propia_Aventura_-_LP.webp',
            'media/Un_Sentimiento_Importante_-_LP.webp',
            'media/Tanto_Por_Hacer_-_LP.webp',
            'media/Rock_y_Amistad_-_EP.webp',
            'media/Otras_Alas_-_LP.jpg',
            'media/Madrid_me_ataca_-_EP.webp',
            'media/Manual_de_Estilo_-_LP.jpg',
            'media/Tiene_Que_Ser_Para_Mi_-_LP.jpg',
            'media/Bodhiria_-_LP.jpg',
            'media/Que_le_den_por_culo_a_tus_amigos_-_LP.webp',

        ],
        camis: [
            'media/El_Arte_De_Morir_Muy_Despacio_-_Camiseta.webp',
            'media/Makinavaja_-_Camiseta_Manga_Larga.webp',
            'media/Hamburguesas_-_Camiseta.webp',
            'media/Elige_Tu_Propia_Aventura_-_Camiseta.webp',
            'media/Natalia_Lacunza_-_Camiseta.webp',
            'media/Tribal_Duro_-_Baby_Tee.webp',
            'media/QLDPCATA_-_Camiseta.webp',
            'media/Los_Punsetes_-_Camiseta.webp',
            'media/AFDTRQHOT_-_Camiseta.webp',
            'media/Peligrosamente_-_Camiseta.jpg',
            'media/Camellos_-_Camiseta.jpg',
            'media/Tanto_Por_Hacer_-_Camiseta_Azul.webp',
            'media/Tanto_Por_Hacer_-_Camiseta_Marrón.webp',
            'media/Cariño_-_Camiseta.webp',
            'media/Fuck_Marry_Kill_-_Camiseta.webp',
            'media/Niña_del_Sur_-_Camiseta.webp',
            'media/D.B.C.A._-_Camiseta.webp',
        ],
        sudaderas: [
            'media/El_Arte_De_Morir_Muy_Despacio_-_Sudadera.webp',
            'media/Duro_-_Sudadera.webp',
            'media/AFDTRQHOT_-_Sudadera.webp',
            'media/Tanto_Por_Hacer_-_Sudadera_Gris.webp',
            'media/Cariño_-_Sudadera.webp',
            'media/Fuck_Marry_Kill_-_Sudadera.webp',
            'media/Judeline_-_Sudadera.webp',
            'media/El_Arte_De_Morir_Muy_Despacio_-_Sudadera.webp',
        ],
        otros: [
            'media/Judeline_-_Pareo.webp',
            'media/Judeline_-_Belly_Button_Piercing.webp',
            'media/Carolina_Durante_-_Pin.webp',
            'media/Duro_-_Gorra.webp',
            'media/Depresión_Sonora_-_Zippo.webp',
        ]
    };


    
    // PRELANDING HOME
    // un array que recopile todas las imagenes de la web
    const artistImages = Object.values(artists).flat();
    const categImages = Object.values(categs).flat();
    const allImages = [...new Set([...artistImages, ...categImages])];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * allImages.length);
        return allImages[randomIndex];
    }

    // imagenes random que siguen el movimiento del raton
    var currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'index.html' && $(window).width() > 576){
        $('#header').css({
            'opacity': '0',
            'pointer-events': 'none'
        });
        
        function handleMouseMove(event) {
            const img = document.createElement('img');
            img.src = getRandomImage();
            img.style.position = 'absolute';
            img.style.width = '10%'; 
            img.style.pointerEvents = 'none'; 
            img.style.left = `${event.pageX}px`;
            img.style.top = `${event.pageY}px`;

            document.body.appendChild(img);

            setTimeout(() => {
                img.remove();
            }, 2000); 
        }

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', () => {
            document.removeEventListener('mousemove', handleMouseMove);
            $('#header').css({
                'opacity': '1',
                'pointer-events': 'all',
                'transition': 'opacity .5s ease'
            });
        });
            
    }

    

    // CARRUSEL DE IMÁGENES HOME
    let selectedArtist = null;


    let selectedCateg;
    if ($(window).width() < 576) {
        selectedCateg = 'todo';
        $('#home-crsl').css('pointer-events', 'all')
    } else {
        selectedCateg = null;
    }
    updateCarousel();


    // para que recoja el input de a qué le das y lo ponga en negrita
    $('.dropdown-item[data-artist]').click(function(event) {
        event.preventDefault();
        event.stopPropagation();

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected'); 
            selectedArtist = null; 
        } else {
            $('.dropdown-item[data-artist]').removeClass('selected'); 
            $(this).addClass('selected'); 
            selectedArtist = $(this).data('artist');
        }

        $('#home-crsl').css('pointer-events', 'all');
        updateCarousel();
    });

    $('.dropdown-item[data-categ]').click(function(event) {
        event.preventDefault();
        event.stopPropagation();

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected'); 
            selectedCateg = null; 
        } else {
            $('.dropdown-item[data-categ]').removeClass('selected');
            $(this).addClass('selected');
            selectedCateg = $(this).data('categ');
        }

        $('#home-crsl').css('pointer-events', 'all');
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
            const imageDiv = $('<div class="col-xl-3 col-6 crslitems"></div>');
            const imageElement = $('<img>', {
                src: imageSrc,
                click: function() {
                    if (imageSrc === 'media/El_Arte_De_Morir_Muy_Despacio_-_LP.webp') {
                        localStorage.setItem('selectedProduct', 'depson');
                    } else if (imageSrc === 'media/Judeline_-_Pareo.webp') {
                        localStorage.setItem('selectedProduct', 'judeline');
                    } else if (imageSrc === 'media/Cariño_-_Camiseta.webp') {
                        localStorage.setItem('selectedProduct', 'cariño');
                    } else {
                        return;
                    }
                    window.location.href = 'product.html';
                    
                }
            });

            imageDiv.append(imageElement);
            $('#home-crsl').append(imageDiv);
            $('#product-buttons.crsl-arrows div').css('color', 'var(--bs-white)');

            
        });
        updateItemsDropdown();
    }

   

    // el dropdown de items solo se muestra cuando has seleccionado artista y categoria (que no sea 'todos')
    // coge la url de las imagenes que se estan mostrando y muestra los nombres sin el webp y transformando las _ en espacios
    function updateItemsDropdown() {
        const itemsButton = $('.items'); 
        const itemsMenu = itemsButton.siblings('.dropdown-menu');

        if (selectedArtist && selectedCateg && selectedCateg !== 'todo') {
            itemsButton.removeClass('disabled');
            $('.itemsUl').addClass('show');
            itemsMenu.empty();

            $('#home-crsl .crslitems img').each(function() {
                const imageUrl = $(this).attr('src');  
                const imageName = imageUrl.split('/').pop()
                    .replace(/_/g, ' ')
                    .replace(/\.webp$/, '')
                    .replace(/\.jpg$/, '')  
                    .replace(/\.jpeg$/, '')  
                const menuItem = $('<li class="itemName"><a class="dropdown-item" href="#">' + imageName + '</a></li>');
                itemsMenu.append(menuItem);
                menuItem.attr('data-image', imageUrl);  

                menuItem.click(function() {
                    const selectedImageSrc = $(this).attr('data-image'); 

                    if (selectedImageSrc === 'media/El_Arte_De_Morir_Muy_Despacio_-_LP.webp') {
                        localStorage.setItem('selectedProduct', 'depson');
                    } else if (selectedImageSrc === 'media/Judeline_-_Pareo.webp') {
                        localStorage.setItem('selectedProduct', 'judeline');
                    } else if (selectedImageSrc === 'media/Cariño_-_Camiseta.webp') {
                        localStorage.setItem('selectedProduct', 'cariño');
                    } else {
                        return; 
                    }

                    window.location.href = 'product.html'; 
                });     
            });

            // esto es para que al hacer hover en un item, el resto se baje la opacidad
            $('.itemName').hover(
                function() {
                    const imageUrl = $(this).attr('data-image');
                    $('#home-crsl .crslitems img').each(function() {
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
                    $('#home-crsl .crslitems img').css('opacity', '1');
                    $('.itemName').css('opacity', '1');
                }
            );
        } else {
            itemsButton.addClass('disabled');
            $('.itemsUl').removeClass('show');

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
        crsl.css('cursor', 'grabbing');
    });

    $(document).on('mouseup', function () {
        isDragging = false;
        crsl.css('cursor', 'grab');
    });

    crsl.on('mouseleave', function () {
        if (isDragging) {
            isDragging = false;
        }
        crsl.css('cursor', 'pointer');
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
        let scrollAmount;
        if ($(window).width() < 576) {
            scrollAmount = crsl.width() * 0.6; 
        } else {
            scrollAmount = crsl.width() * 0.3;
        }
 
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
    const crslScrl = $('#home-crsl');

    let crslItems = gsap.utils.toArray('.crslitems');

    gsap.to(crslItems, {
        xPercent: -100 * (crslItems.length - 1),
        ease: 'sine.out',
        scrollTrigger: {
            trigger: crslItems,
            pin: true,
            scrub: 3,
            snap: 1 / (crslItems.length - 1),
            end: '+=' + crslScrl.offsetWidth
        }
    })
    
    crsl.on('wheel', function(e) {
        e.preventDefault();
        const delta = e.originalEvent.deltaY; 
        const scrollAmount = 120;

        gsap.to('#home-crsl', {
            scrollLeft: '+=' + (delta > 0 ? scrollAmount : -scrollAmount), 
            ease: "power1.out",
            duration: 0.5
        });
    });


    // manejo del carrusel deslizando para movil
    let isSwiping = false;
    let startTouchX;
    let touchScrollLeft;

    crsl.on('touchstart', function (e) {
        isSwiping = true;
        startTouchX = e.originalEvent.touches[0].pageX - crsl.offset().left;
        touchScrollLeft = crsl.scrollLeft();
    });

    crsl.on('touchmove', function (e) {
        if (!isSwiping) return;
        e.preventDefault();
        const x = e.originalEvent.touches[0].pageX - crsl.offset().left;
        const walk = (x - startTouchX) * 1.2; 
        crsl.scrollLeft(touchScrollLeft - walk);
    });

    crsl.on('touchend', function () {
        isSwiping = false;
    });



    // MENU
    // para que se abra por encima de las cosas con una altura
    if ($(window).width() > 576 && currentPage === 'index.html') {
        $('.my-header-btn').click(function() {
            $('#header').css('height', '52%')
            headerHeight();
        });
    }
    function headerHeight() {
        if ($('.btn.show').length === 0) {
            $('#header').css('height', '9%');
        }
    }

    var currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'product.html') {
        $('.my-header-btn').click(function() {
            var headerHeight = $('#header').height();
            
            if(headerHeight < '50') {
                $('#header').css('height', '52%');
                $('.dropdown-menu').addClass('show');
                $('.dropdown-menu').css({
                    'position': 'absolute',
                    'inset': '0px auto auto 0px',
                    'margin': '0px',
                    'transform': 'translate3d(0px, 35px, 0px)'
                });
            } else if (headerHeight > '50') {
                $('#header').css('height', '9%');
                    $('.dropdown-menu').removeClass('show');
                $('.dropdown-menu').css({
                    'position': '',
                    'inset': '',
                    'margin': '',
                    'transform': ''
                });
            }
        });

    }



    // PRODUCT PAGE FOTOS
    // Carrusel pantalla completa al hacer click en una imagen de producto
    $("#gallery-main img").click(function(){
        var imagenSrc = $(this).attr("src");

        var relatedImages = $("#gallery-main img").map(function(){
            return $(this).attr("src");
        }).get();

        var carouselIndex = relatedImages.indexOf(imagenSrc);
        var carouselHtml = `
            <div id='carousel'>
                <img class='carousel-image' src='${imagenSrc}' />
                <div class='carousel-arrow carousel-arrow-left'>[←]</div>
                <div class='carousel-arrow carousel-arrow-right'>[→]</div>
            </div>
        `;
        
        $("body").append(`
            <div id='imagenGrandeDiv' style='position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(10,10,10,0.9);display:flex;justify-content:center;align-items:center;cursor:pointer;z-index:10'>
                ${carouselHtml}
            </div>
        `);
        
        // manejarlo con flechitas
        $('.carousel-arrow-right, .carousel-arrow-left').click(function(event) {
            event.stopPropagation();
            if ($(this).hasClass('carousel-arrow-right')) {
                carouselIndex = (carouselIndex + 1) % relatedImages.length;
            } else {
                carouselIndex = (carouselIndex - 1 + relatedImages.length) % relatedImages.length;
            }
            $('.carousel-image').attr('src', relatedImages[carouselIndex]);
        });
    
        // manejarlo con teclado
        $(document).keydown(function(event) {
            if ($('#imagenGrandeDiv').length) {
                switch (event.which) {
                    case 37: // flecha izquierda
                        carouselIndex = (carouselIndex - 1 + relatedImages.length) % relatedImages.length;
                        break;
                    case 39: // flecha derecha
                        carouselIndex = (carouselIndex + 1) % relatedImages.length;
                        break;
                    case 27: // esc
                        $('#imagenGrandeDiv').remove();
                        return;
                }
                $('.carousel-image').attr('src', relatedImages[carouselIndex]);
            }
        });
        
        $("#imagenGrandeDiv").click(function(){
            $('#imagenGrandeDiv').remove();
        });
    
        $(".carousel-arrow").click(function(event){
            event.stopPropagation();
        });
    });
    


    // +INFO
    $("#product-bt-info").click(function() {
        var productInfo = $("#product-info");
        var isVisible = productInfo.hasClass("visible");

        productInfo.toggleClass("visible");

        var isMobile = window.innerWidth <= 768;

        if (!isVisible) {
            if (isMobile) {
                $("#product-box").css("top", "23%");      
                $("#gallery-main").css("top", "-32%");    
                $("#header").css("top", "-40%");          
            } else {
                $("#product-box").css("top", "14%");    
                $("#gallery-main").css("top", "-31%");     
                $("#header").css("top", "-40%");           
            }
            $("#product-bt-info div:first-child").text("- info"); 
        } else {
            if (isMobile) {
                $("#product-box").css("top", "63%");      
                $("#gallery-main").css("top", "9%");      
                $("#header").css("top", "0");             
            } else {
                $("#product-box").css("top", "54%");     
                $("#gallery-main").css("top", "9%");     
                $("#header").css("top", "0");            
            }
            $("#product-bt-info div:first-child").text("+ info"); 
        }
    });



    // AÑADIR ELEMENTOS AL CARRITO
    $(".add").click(function() {
        var badge = $(".btn-group .badge");

        if (badge.hasClass("none")) {
            badge.removeClass("none");
            badge.text("1"); 
        } else {
            var currentCount = parseInt(badge.text());
            badge.text(currentCount + 1);
        }
    });


    // ENLACE ENTRE HTMLS
    // ACTUALIZAR COSAS PRODUCT PAGE SEGÚN EL ELEMENTO QUE COJAS
    const productos = {
        depson: {
            images: [
                'media/product/El_Arte_De_Morir_Muy_Despacio_-_Vinilo.webp',
                'media/product/El_Arte_De_Morir_Muy_Despacio_-_Vinilo_6.webp',
                'media/product/El_Arte_De_Morir_Muy_Despacio_-_Vinilo_3.webp',
                'media/product/El_Arte_De_Morir_Muy_Despacio_-_Vinilo_4.webp',
                'media/product/El_Arte_De_Morir_Muy_Despacio_-_Vinilo_2.webp',
                'media/product/El_Arte_De_Morir_Muy_Despacio_-_Vinilo_5.webp',
            ],
            title: "Depresión Sonora – El Arte de Morir Muy Despacio (Edición Deluxe)",
            price: "38,00€",
            desc: `<div>
                        <div>A1 Parte I: Introducción a la Entropía.<br>
                            A2 Bienvenido al Caos.<br>
                            A3 Veo tan Dentro.<br>
                            A4 Dos Adolescentes y su Primer Amor.<br>
                            A5 Parte II: La Abrazo con Fuerza (Carta a la Soledad).<br>
                            A6 Te Mientes a ti mismo para Ser Feliz.
                        </div>
                        <div>B1 Voy a Explotar.<br>
                            B2 Parte III: Muerte y Resurrección.<br>
                            B3 Fumando en mi Funeral.<br>
                            B4 Dónde Están mis Amigos.<br>
                            B5 Como todo el Mundo.
                        </div>
                    </div>`,
            masinfo: `“El arte de morir muy despacio” se puede entender como el reverso nihilista y sarcástico de esos manuales de auto-ayuda a los que Marcos y los de su edad han sido sobreexpuestos.<br><br>
            3x Vinilo 7″ color | Edición limitada 300 unidades`
        },
            
        judeline: {
            images: [
                'media/product/Judeline_-_Pareo.webp',
                'media/product/Judeline_Pareo_6.jpg',
                'media/product/Judeline_Pareo_4.jpg',
                'media/product/Judeline_Pareo_5.jpg',
                'media/product/Judeline_Pareo_3.webp',
                'media/product/Judeline_Pareo_2.jpeg',
            ],
            title: "Judeline - Pareo",
            price: "25,00€",
            desc: `Pareo con temática marina para usar de diversas formas[Judeline's first merch - summer edition] <br><br>
            Judeline entiende tan bien el pop que es capaz de estirar sus límites, y sin duda tiene todas las cartas en su baza para ser la que lidere la actual generación. <br><br>
            Viste con estilo con el pareo gasa georgette oficial de Judeline este verano en tu playa favorita. <br><br>
            A complementar con el belly button piercing con el logo de Judeline, también disponible en la web.`,
            masinfo: `Composición: Gasa georgette con acabado en pespunte. <br><br>
            Dimensiones: 70×145 cm <br><br>
            Diseñado por: Marta Ochoa <br><br>
            `
        },
        cariño: {
            images: [
                'media/product/Cariño_-_Camiseta.webp',
                'media/product/Cariño_-_Camiseta_3.jpg',
                'media/product/Cariño_-_Camiseta_2.jpg',
                'media/product/Cariño_-_Camiseta_5.webp',
                'media/product/Cariño_-_Camiseta_6.webp',
                'media/product/Cariño_-_Camiseta_4.webp',
            ],
            title: "Cariño - Camiseta 'Cariño'",
            price: "20,00€",
            desc: `Cariño: camiseta blanca <br>
                    Álbum: Cariño <br><br>
                    "Cariño" es un álbum de melodías pop que resulta poco menos que imposible de sacarse de la cabeza. Muestra gran descaro en las letras y una frescura y una actitud que desde siempre ha llamado la atención de todo el mundo. <br><br>
                    Este diseño de camiseta apuesta por un estilo y2k llamativo y alegre para tías chulísimas. <br><br>
                    Tallas disponibles: S, M, L, XL 
                    `,
            masinfo: `Material: algodón <br><br>
                        Diseño: Nina Muro`,
        }
    };

    const productNames = Object.keys(productos);
    let currentIndex = productNames.indexOf(localStorage.getItem('selectedProduct')); 

    function loadProductImages() {
        const selectedProduct = productNames[currentIndex];
        const productData = productos[selectedProduct];
        const images = productData.images;

        $('#gallery-main img').attr('src', images[0] || '');
        $('#product-gallery img').each((index, img) => {
            $(img).attr('src', images[index + 1] || '');
        });

        $('#product-text .title').text(productData.title);
        $('#product-text .sub').text(productData.price);
        $('#product-info .songs').html(productData.desc);
        $('#product-info .masinfo').html(productData.masinfo);

        localStorage.setItem('selectedProduct', selectedProduct);
        updateMenuSelection(selectedProduct);

    }

    function updateMenuSelection(selectedProduct) {
        let selectedArtist = null;
        let selectedCateg = null;

        if (selectedProduct === 'depson') {
            selectedArtist = 'depresionsonora';
            selectedCateg = 'vinilos';
        } else if (selectedProduct === 'judeline') {
            selectedArtist = 'judeline';
            selectedCateg = 'otros';
        } else if (selectedProduct === 'cariño') {
            selectedArtist = 'cariño';
            selectedCateg = 'camis';
        }

        $('.dropdown-menu a').removeClass('selected').attr('aria-selected', 'false');
        $('.dropdown-menu a[data-artist="' + selectedArtist + '"]').addClass('selected').attr('aria-selected', 'true');
        $('.dropdown-menu a[data-categ="' + selectedCateg + '"]').addClass('selected').attr('aria-selected', 'true');
    }

    $('.arrow.left').on('click', () => {
        currentIndex = (currentIndex - 1 + productNames.length) % productNames.length;
        loadProductImages();
    });

    $('.arrow.right').on('click', () => {
        currentIndex = (currentIndex + 1) % productNames.length;
        loadProductImages();
    });

    loadProductImages();



    // COSAS MOVIL
    if ($(window).width() < 576) {

        $('#header #mvl').each(function() {
            $(this).on('click', function() {
                const btn = $(this).find('button');
                const dropMenu = $(this).find('.dropdown-menu');
                const dropHeight = dropMenu.outerHeight();
                $('#header .btn-group').not(this).css('margin-bottom', '0');
                if ($(this).css('margin-bottom') === '0px') {
                    $(this).css('margin-bottom', dropHeight + 'px');
                } else {
                    $(this).css('margin-bottom', '0');
                }
                    });
                });

                var currentPage = window.location.pathname.split('/').pop();
                if (currentPage === 'product.html') {
                    $('.btn-group').css('margin-bottom', '60%');
                }

        $('#mvl').click(function() {
            $('.mvl').css('display', 'flex');
        });
        $('#mvl2').click(function() {
            $('.mvl2').css('display', 'flex');
        });

        

    }

    $('.menubtn').click(function() {
        if ($(this).text() === 'menu') {
            $('#header .btn-group').css('display', 'block');
            $('#header').css('height', '100%')
            var currentPage = window.location.pathname.split('/').pop();
            if (currentPage === 'product.html') {
                $('.mvl').css('display', 'flex');
                $('.mvl2').css('display', 'flex');
            }
            $(this).text('cerrar');
        } else if(($(this).text() === 'cerrar')){
            $('#header .btn-group').css('display', 'none');
            $(this).text('menu');
            $('#header').css('height', '9%')
            var currentPage = window.location.pathname.split('/').pop();
            if (currentPage === 'product.html') {
                $('.mvl').css('display', 'none');
                $('.mvl2').css('display', 'none');
            }
        }
    })
});
