

const sectionFirst = document.querySelector(".queryselecor");

const o1 = document.querySelector(".corpo");


gsap.from(".menu",{
    opacity:0,
    duration: 3,
    delay:"0.5"

})


gsap.fromTo(".texto-banner, .botao", {
    x:-850,
    opacity: "20%",
}, {
    x: 0,
    delay: "0.3",
    duration: 1,
    opacity: "100%",
})


gsap.from(".corpo",{
    opacity:0,
    duration:2,
    delay: "0.5",
    scrollTrigger: {
        trigger: ".corpo",
        start: 'top 60%',
        end: 'bottom 20%',
        markers: true
        }
})







