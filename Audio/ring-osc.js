// ring-osc.js
// geoff.maddock@gmail.com

a.show()
a.setSmooth(0.9);
a.setBins(4)

ring = 0.3

osc(50,0.1,1.2)
    .out(o1)
src(o1)
    .thresh(0.9)
    .modulateScale(osc(()=>a.fft[0] * 0.7 + 0.1))
    .modulate(noise(3,()=>(a.fft[2])+1))
    .kaleid(256)
    .mult(solid(()=>ring,()=>ring,()=>ring))
    .add(
        src(o0).scale(1).scrollX(()=>Math.sin(time*0.1)*0.005).brightness(0.1).contrast(1.31),
        0.7
    )
    .modulateRotate(src(o0).thresh(0.4).repeat().pixelate(2,2).scale(0.2),0.5)
    .out()