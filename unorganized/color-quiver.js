el=(s,b,l)=>shape(99,s,b)
  .modulate(
  gradient().pixelate(2,2)
  .brightness(-.5).color(0,l*2)
  .layer(
  gradient().brightness(-.5)
  .color(0,1).mask(shape(2,l,0))),-1)

src(o0)
  .modulate(gradient().pixelate(2,2).color(1,1).brightness(-.5),-0.1).layer(
el(.05,0.0,.2).r().scrollX(.4)
  .layer(el(.05,0.0,.2).r().scrollX(-.4))
  .layer(el(.05,0.0,.4).r().scrollX(0))
  .layer(el(.05,0.0,.3).r().scrollX(.2))
  .layer(el(.05,0.0,.3).r().scrollX(-.2))
    .mult(gradient().hue(.4).saturate(5).colorama(0.5).rotate(3).pixelate(5,1000))
  )
.scale(() => a.fft[0] + 1 ) 
.scrollX(() => a.fft[1])
.out()


// wheel variation
// el=(s,b,l)=>shape(99,s,b)
//   .modulate(
//   gradient().pixelate(2,2)
//   .brightness(-.5).color(0,l*2)
//   .layer(
//   gradient().brightness(-.5)
//   .color(0,1).mask(shape(2,l,0))),-1)

// src(o0)
//   .modulate(gradient().pixelate(2,2).color(1,1).brightness(-.5),-0.1).layer(
// el(.05,0.0,.2).r().scrollX(.4)
//   .layer(el(.05,0.0,.2).r().scrollX(-.4))
//   .layer(el(.05,0.0,.4).r().scrollX(0))
//   .layer(el(.05,0.0,.3).r().scrollX(.2))
//   .layer(el(.05,0.0,.3).r().scrollX(-.2))
//     .mult(gradient().hue(.4).saturate(5).colorama(0.5).rotate(3).pixelate(5,1000))
//   )
// .scale(() => a.fft[0] + 1 ) 
// .scrollX(() => a.fft[1])
// .rotate(() => time/10)
// .out()
