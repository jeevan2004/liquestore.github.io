$(".happy-clints-slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
                autoplay: true,
                centerMode: true,
                centerPadding: '170px',
                autoplaySpeed: 2000,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
                centerMode: true,
                centerPadding: '100px',
                autoplaySpeed: 2000,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
                centerMode: true,
                centerPadding: '80px',
                autoplaySpeed: 2000,
            }
        }


    ]
});

$('.counter').counterUp({
    delay: 10,
    time: 3000
});

$(document).ready(function () {
    $('.mdb-select').materialSelect();
});

$(".single-product-quantity").inputSpinner();

$(document).ready(function () {
    $(".cart-remove").click(function () {
        $(this).closest(".adding-cart").remove();
    });
});