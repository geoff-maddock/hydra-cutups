shape(4,0.9)
  .mult(osc(20,0.5,1))
  .modulateKaleid(osc(10), 3.0, 3.0, 0.5, 0.5).colorama().rotate(2,2)
  .out(o0)

voronoi(3,5).colorama().layer(shape(3).mult(o0).out(o1))
render(o1)
