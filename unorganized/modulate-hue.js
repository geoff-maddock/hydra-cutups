src(o0)
  .modulateHue(src(o0).scale(1.5),1)
  .layer(osc(4,0.5,2).mask(shape(4,0.5,0.001)))
  .out(o0)