// by @laguirrepop

sep = 0.08
shape(80,0.25).scrollY(sep)
  .mult(shape(80, 0.25).scrollY(-sep))
  .scale(1.25,2)
  .scroll(0.33,0.43)
  .kaleid(10)
  .rotate(0,.15)
  .repeat(8,4,0.5)
  .scroll(0,0,-0.025,-0.05)
  .color(0,0.5,0.13)
  .saturate(0.85)
  .contrast(0.88)
  .mult(shape(130,0.55,0.66),0.5)
  .out()