shape(2,1)
  .repeat(10, 10, 10)
  .rotate(1,1)
.blend(
	shape(2,0.001)
  		.repeat(10, 10, 10)
  		.rotate(1,0.3))
	.color(1,0,0)
.blend(
	shape(2,0.001)
  		.repeat(10, 10, 10)
  		.rotate(2,0.6))
	.color(1,0,0)
  .saturate( ({time}) => Math.sin(time) * 10 )
.out()

// LESS intense
shape(2,1,3)
  .repeat(10, 10, 10)
  .rotate(1,1)
.blend(
	shape(2,0.001)
  		.repeat(10, 10, 10)
  		.rotate(1,0.3))
	.color(1,0,0)
.blend(
	shape(2,0.001)
  		.repeat(10, 10, 10)
  		.rotate(2,0.6))
	.color(1,0,0)
  .saturate( ({time}) => Math.sin(time) *2 )
.out()