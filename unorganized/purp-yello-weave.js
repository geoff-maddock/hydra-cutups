
 
 
solid()
.add(osc(170,0.1).invert(-2).kaleid(3).modulateScale(gradient().g(7).diff(
    shape(100, 0.29, 0.34)
      .scale(1.2, 0.9,1)
      .r(1.5,.5)
      .scale(1.4)
      .kaleid(3)
  .rotate([0,0.1,0.5,-0.3].smooth().fast(.25))
      .mult(
        noise(5, 0.03)
          .brightness(3)
          .mult(
            osc(
              9,
              0.09,
              () => 0.2 * Math.sin(time * 3) + 0.5
            ).color(-0.5, 0.5, 0.5)
          )
      )
  )))
.out()



src(o0)
.diff(src(o1).hue().layer(src(o0))
.scrollY(0.001)
.contrast(1.01)
.rotate(0.001)
.scale([1, 1.03].fast(0.1).smooth()))
.g(1)
.diff(src(o1))
  .out(o2)

render(o2)

shape(130,0.043,0.475)
    .color(0,1,1)
	.add(shape(130,.2,[.09,.15].ease('sin')),[.75,.5].ease('sin'))
	.diff(o3,0.0).scale(1,1,width/height).add(o1,.175).scale(0.66).color(5,.5,-.75)
	.out(o1)

osc(15,-.25)
	.thresh(0.999,0.02)
	.thresh(0.5,0.002)
	.kaleid(130)
	.out(o3)