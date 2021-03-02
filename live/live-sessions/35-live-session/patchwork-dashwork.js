v=(a)=>voronoi(2,0.1,a)
s=-0.8
o=(a=0,b=1)=>v(a).contrast(b).modulateScale(v(0).contrast(1.5),s)//.modulateScale(v(0).contrast(1.5),s)//.modulateScale(v(0).contrast(1.5),s).modulateScale(v(0).contrast(1.5),s)

osc(400,0).thresh(.8,.1).mult(osc(200,0).rotate(1.57).thresh(.2))
  .modulate(osc(200,0).thresh().color(0,1))
  .modulateRotate(o(),3).modulateScale(o(),-.9)
  .mult(osc(6,0,1.6).modulate(o().sub(gradient()),1)).invert()
//   .mult(o(1,2.3).brightness(.6),1)
  .out()