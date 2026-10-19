

let tl = gsap.timeline();

tl.fromTo(".texto-banner, .botao", 
    {x: -850, opacity: "20%"}, 
    {x:0, duration: 1, ease: "power3.out"}
  
)
.to(".texto-banner, .botao",
    {opacity: "100%", duration: 3},
    "-=1"
)

gsap.from(".texto1, .navBar, .imgLogo",
    {opacity: 0, 
    duration:3,
    delay: "0.5"
    },
   
)

