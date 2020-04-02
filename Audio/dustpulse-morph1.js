// dustpulse.js
// audio reactive pulsing dustball
// hydra visuals
// https://github.com/geoff-maddock/hydra-cutups

// more music
// cutups - geoff.maddock@gmail.com
// https://soundcloud.com/cutups

a.show()
a.setBins(6)
osc(1,1,.9).color(1,0.3,()=>a.fft[0]*1).rotate(1,0.5).modulateRotate(o0).mult(o1,1).mult(o2).out()
osc(2,()=>a.fft[3]*0.5).kaleid(100).modulate(noise(3)).modulate(o1).out(o1)
shape(100,.1,2).scale(0.6,.6).modulateScale(osc(2,10)).out(o2)