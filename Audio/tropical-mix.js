voronoi(2,0.3,0.2).shift(0.5)
.modulatePixelate(voronoi(4,0.2),32,2)
.scale(()=>1+(Math.sin(a.fft[0]*5)*0.1))
.diff(voronoi(3).shift(0.6))
.diff(osc(2,0.15,1.1).rotate())
.brightness(0.1).contrast(1.2).saturate(() => a.fft[1]*1.3 + .2)
	.out()
speed = 0.8