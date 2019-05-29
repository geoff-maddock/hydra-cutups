// dustpulse.js
// audio reactive pulsing dustball
// geoff.maddock@gmail.com

a.show()
osc(1,1,.9).color(1,0.3,()=>a.fft[0]*1).rotate(1,0.5).modulateRotate(o0).mult(o1,1).mult(o2).out()
osc(2,()=>a.fft[3]*0.1).kaleid(100).modulate(noise(3)).modulate(o1).out(o1)
shape(100,.1,1).scale(0.6,.6).modulateScale(osc(1,1)).out(o2)