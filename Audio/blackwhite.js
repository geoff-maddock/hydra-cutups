

shape(1,1)
.mult(voronoi(1000,2)
.blend(o0).luma())
.add(shape(3,0.125)
     .rotate(1,() => a.fft[0] + .2).mult(voronoi(1000,a.fft[0]).luma())
     .rotate(1.5)).scrollX([0.1,-0.0625,0.005,0.00001],0)
.scrollY([0.1,-0.0625,0.005,0.00001],0)
.out(o1)

voronoi(2,0.3,0.2).shift(0.5)
.modulatePixelate(voronoi(4,0.2),32,2)
.scale(()=>1+(Math.sin(a.fft[0]*5)*0.1))
.diff(voronoi(3).shift(0.6))
.diff(osc(2,0.15,1.1).rotate())
.brightness(0.1).contrast(1.2).saturate(() => a.fft[1]*1.3 + .2)
  .out(o2)
speed = 0.8