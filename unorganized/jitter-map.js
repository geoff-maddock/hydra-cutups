osc(1000)
	.color(0,1,0) 
  	.saturate( ({time}) => Math.sin(time) * 1 )
	.blend(
		voronoi(2)
		.pixelate(10))
.out()

osc(1000)
	.color(0,1,0) 
.kaleid([2,4,6,8,32,64])
  	.saturate( ({time}) => Math.sin(time)  )
	.blend(
		voronoi(20)
  			.kaleid(16)
		.pixelate(10))
.scale(()=>a.fft[3]*2 +1)
.out()