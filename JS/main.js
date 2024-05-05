gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.6,
        effect: true
    })

    
    let items = gsap.utils.toArray('.container, .gallery-auto, .form');
    items.forEach(item => {
        gsap.fromTo(item, {x: -800, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-800',
                end: '-300',
                scrub: true
            }
        })
    });
}


new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    sidesPerView: 3,
});