// yo con el mundo
// by @laguirrepop

bpm = 77

shape(130,0.043,0.475)
    .color(0,1,1)
	.add(shape(130,.2,[.09,.15].ease('sin')),[.75,.5].ease('sin'))
	
	.out(o1)

osc(15,-.25)
	.thresh(0.999,0.02)
	.thresh(0.5,0.02)
	.kaleid(130)
	.out(o2)

src(o1).add(o2,0.175).scale(1,1,width/height).add(o0,.175).scale(0.66).color(5,.5,-.75).out(o0)