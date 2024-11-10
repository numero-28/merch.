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
    

    // arrays de artistas y de categorias
    const artists = {
        depresionsonora: [
            'media/El_Arte_De_Morir_Muy_Despacio_-_LP.webp',
            'media/El_Arte_De_Morir_Muy_Despacio_-_Camiseta.webp',
            'media/El_Arte_De_Morir_Muy_Despacio_-_Sudadera.webp',
            'media/Makinavaja_-_EP.webp',
            'media/Makinavaja_-_Camiseta_Manga_Larga.webp',
            'media/Depresión_Sonora_USA_Tour_-_Camiseta_.webp',
        ],
        carolinadurante: [
            'media/Elige_Tu_Propia_Aventura_-_LP.webp',
            'media/Hamburguesas_-_Camiseta.webp',
            'media/Cuatro_Chavales_-_LP.webp',
            'media/Carolina_Durante_-_LP.webp',
            'media/Elige_Tu_Propia_Aventura_-_Camiseta.webp',
        ],
        judeline: [
            'media/Judeline_-_Pareo.webp',
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
            'media/Camellos_-_Camiseta.jpg',
            'media/Calle_Para_Siempre_-_LP.jpg',
            'media/Gran_Hostal_-_LP.jpg',
            'media/Manual_de_Estilo_-_LP.jpg',
            'media/Peligrosamente_-_Camiseta.jpg',
        ],
        corte: [
            'media/Corte!_-_EP.webp',
        ],
        mujeres: [
            'media/Aquellos_Ojos_-_Single.webp',
            'media/No_Volveré_-_Single.webp'
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
        ],
        camis: [
            'media/El_Arte_De_Morir_Muy_Despacio_-_Camiseta.webp',
            'media/Makinavaja_-_Camiseta_Manga_Larga.webp',
            'media/Hamburguesas_-_Camiseta.webp',
            'media/Elige_Tu_Propia_Aventura_-_Camiseta.webp',
        ],
        sudaderas: [
            'media/El_Arte_De_Morir_Muy_Despacio_-_Sudadera.webp',
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
                    .replace(/\.webp$/, '');  
                const menuItem = $('<li class="itemName"><a class="dropdown-item" href="#">' + imageName + '</a></li>');
                itemsMenu.append(menuItem);
                menuItem.attr('data-image', imageUrl);        
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


    // para que el menu se abra por encima de las cosas con una altura
    if ($(window).width() > 576) {
        $('.my-header-btn').click(function() {
            $('#header').css('height', '50%')
            headerHeight();
        });
    }
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
        const scrollAmount = 90;

        gsap.to('#home-crsl', {
            scrollLeft: '+=' + (delta > 0 ? scrollAmount : -scrollAmount), 
            ease: "power1.out",
            duration: 0.8
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


    // ENLACE ENTRE PAGINAS
    
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
            price: "38,00€"
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
            price: "25,00€"
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
            price: "20,00€"
        }
    };

    const productNames = Object.keys(productos);
    let currentIndex = productNames.indexOf(localStorage.getItem('selectedProduct') || 'depson'); // Empezamos con el producto seleccionado o 'depson' si no hay nada en localStorage.

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

        localStorage.setItem('selectedProduct', selectedProduct);

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


    // responsive
    if ($(window).width() < 576) {

        $('#header .btn-group').each(function() {
            $(this).on('click', function() {
                const btn = $(this).find('button');
                const dropMenu = $(this).find('.dropdown-menu');
                const dropHeight = btn.outerHeight() + dropMenu.outerHeight();
                
                if ($(this).css('margin-bottom') === '0px') {
                    $(this).css({
                        'margin-bottom': (dropHeight) + 'px' 
                    });
                } else {
                    $(this).css({
                        'margin-bottom': '0' 
                    });
                }
            });
        });

    }

    $('.menubtn').click(function() {
        if ($(this).text() === 'menu') {
            $('#header .btn-group').css('display', 'block');
            $('#header').css('height', '100%')
            $(this).text('cerrar');
        } else if(($(this).text() === 'cerrar')){
            $('#header .btn-group').css('display', 'none');
            $(this).text('menu');
            $('#header').css('height', '9%')
        }
    })
});
