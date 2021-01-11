// static
// shape(100,0.35,0.25).out(o0)
// osc(40,0,1).hue(-0.1).modulate(noise(1,0),0.5).modulateRotate(osc(12,0).kaleid(100),4).out(o1)
// src(o2).modulateHue(o1,4).blend(o0,0.01).out(o2)
// src(o2).contrast(2).mult(src(o1)).out(o3)
// render()

// moving
shape(100,0.35,0.25).scale(()=>a.fft[1]*2).out(o0)
osc(40,0,1).hue(-0.1).modulate(noise(1,2),()=>a.fft[0]).modulateRotate(osc(12,0).kaleid(100),4).out(o1)
src(o2).modulateHue(o1,4).blend(o0,0.01).out(o2)
src(o2).contrast(2).mult(src(o1)).rotate(10,2).out(o3)
render()