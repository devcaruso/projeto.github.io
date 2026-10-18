

let tl = gsap.timeline();

tl.fromTo(".texto-banner, .botao", 
    {x: -850, opacity: "40%"}, 
    {x:0, duration: 0.5, ease: "power3.out"}
  
)
.to(".texto-banner, .botao",
    {opacity: "100%", duration: 3},
    "-=0.5"
)