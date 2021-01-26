noise(1000)
	.posterize( [1, 5, 15, 30] , 1 )
	.blend(
  		osc(10000)
		.color(1,0,0))
	.pixelate(300)
.out()

// audio reactive
noise(1000)
	.posterize( [1, 5, 15, 30, 90, 99] , 1 )
	.blend(
  		osc(() => a.fft[0])
		.color(1,0,0))
	.pixelate(3)
.out()

// kaleidoscope
noise(1000)
	.posterize( [1, 5, 15, 30, 90, 99] , 1 )
	.blend(
  		osc(() => a.fft[0])
		.color([1,0,0], [0,0,1]))
	.pixelate(() => a.fft[2] * 10 + 1)
	.kaleid(8)
.out()