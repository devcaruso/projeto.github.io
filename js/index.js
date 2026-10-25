




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
function scrollTriggerAnimation(elem, starting,ending, mk, sc){
gsap.fromTo(elem,{
   opacity:1,
   duration:3},{
    x:-480,
    opacity:0,
    duration:3,
    stagger: 1,
    scrollTrigger: {
        trigger: elem,
        start: starting,
        end: ending,
        taggleActions:"play none none reverse",
        fastScrollEnd: true,
        preventOverlaps: true,
        markers: mk,
        scrub: true
        }
})
}

scrollTriggerAnimation(".texto-banner","90% 20%", "400% 35%");
scrollTriggerAnimation(".botao","390% center", "600% center");

gsap.fromTo(".corpo, .box",{
    opacity:0},{
        opacity:1,
        duration:3,
        stagger: "0.5",
    scrollTrigger: {
        trigger: ".corpo, .box",
        start: '5% center',
        end: 'center 70%',
        scrub: true
        }
})

gsap.fromTo(".hero-imgsmg, .box",{
    },{

    y:-150,
    scrollTrigger:{
    trigger:".hero-imgsmg, .box",
    start:"top center",
    end: "bottom center",
    scrub: true
    }

})







