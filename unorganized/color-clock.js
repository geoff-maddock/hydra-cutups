el=(s,b,l)=>shape(99,s,b)
  .modulate(
  gradient().pixelate(12,12)
  .brightness(-.5).color(0,l*2)
  .layer(
  gradient().brightness(-.5)
  .color(0,1).mask(shape(2,l,50))),-1)

src(o0).mask(shape(500,5,2))
  .modulate(gradient().pixelate(100,100).brightness(-.5),-.01)
  .layer(
  el(.0,0.01,.2).r().mult(gradient().hue(.4).saturate(3).colorama(0.5))
  .rotate(10,Math.PI)
)
  .out()
