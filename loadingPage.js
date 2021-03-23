const time = gsap.timeline({defaults:{ease:'power1.out'}})

time.to('.loader',{y:'-100%', duration:2.5, delay:3})
time.to('.blueSlider',{y:'-100%', duration:2, delay:1}, '-=2')
time.to('.limeSlider',{y:'-100%', duration:2, delay:1}, '-=2')
time.to('.pinkSlider',{y:'-100%', duration:2, delay:1}, '-=2')
