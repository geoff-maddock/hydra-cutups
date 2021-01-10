
 
 gradient(5).mask(voronoi(),60,0.5).invert([4,1]).out()

 // drop
 osc(100,-0.25,1).color(4,6,1).saturate(2).kaleid(50)
   .mask(noise(25,2).modulateScale(noise(1.25,0.05)))
   .modulateScale(osc(6,-0.5,2).kaleid(50))
   .mult(osc(1,-0.25,2).kaleid(5))
   .scale(0.5,0.5,0.75)
   .out()