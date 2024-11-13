const mainnav = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 2) {
        mainnav.classList.add('sticky');
    }
    else {
        mainnav.classList.remove('sticky');
    }
});


// SLİCK SLİDER
$('.comentslick').slick({
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    adaptiveHeight: true,
    reponsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
    ]
});



// ANY QUESTİONS SECTİON
document.getElementById('accor').addEventListener('click', () => {
    let target = event.target;

    if (target.classList.contains("accod-header")) {
        let section = target.nextElementSibling;
        section.classList.toggle('active');

        let allsection = document.querySelectorAll('.accod-sec-cont');
        allsection.forEach(function (otherSection) {

            if (otherSection !== section && otherSection.classList.contains('active')) {
                otherSection.classList.remove('active');
            }
        })
    }
})


// header menu
function toggleMenu() {
    let menu = document.querySelector('.header_menu');
    let barsicon = document.querySelector('.menu_side_area i')

    menu.style.left = menu.style.left === '0px' ? '-250px' : '0px';
    if (barsicon.classList.contains('fa-bars')) {
        barsicon.classList.remove("fa-bars");
        barsicon.classList.add("fa-xmark");
    }
    else {
        barsicon.classList.remove('fa-xmark');
        barsicon.classList.add("fa-bars");
    }
}