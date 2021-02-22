//flor de fuego
osc(200,0)
.modulate(osc(30).kaleid(200),0.01)
.thresh(0.9,0)
.diff(osc(100,0).thresh(0.9,0).rotate(11))
.scrollY(0,-0.1)
.modulate(osc(20).rotate(0.1).modulateRotate(noise(2)).thresh(),0.01)
.modulateScale(osc([10,5,3],0.05).thresh(0.5).rotate([0,0.1,0.5,-0.3]),()=>Math.sin(time)*0.5)
.out()