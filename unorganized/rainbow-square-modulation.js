src(o0).scale(1.01).modulate(
    noise(3)
    ,0.01)
  .layer(osc(30,0.1,2).rotate(1) .mask(shape(4,0.3,1e-6)))
  .out()
  