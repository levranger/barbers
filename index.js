$(document).ready(function(){

    $('#cross').click(hideMobileMenu)
    $('a').click(hideMobileMenu);
    $('#burger-icon').click(openMobileMenu);

});

const openMobileMenu = () => {
    $('.menu-hide').toggleClass('show');
    // $('#burger-icon')[0].style.display = 'none';
}
const hideMobileMenu = () => {
    $('.menu-hide').removeClass('show');
    $('#burger-icon').removeClass('active');
    $('#burger-icon')[0].style.display = 'block';
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    margin:10,
    merge: true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

// $('.eapps-link')[0].style.display = 'none'
//     console.log($('.eapps-link'))
//
// //    $('.eapps-link')[0]
setTimeout(() => {
    $('.eapps-link')[0].style.display = 'none';
    // console.log(document.getElementsByClassName('eapps-link')[0])

} ,500)

