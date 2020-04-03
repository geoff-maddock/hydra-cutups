osc(10,-0.25,1).color(.2,0,1).saturate(2).kaleid(50)
    .mask(noise(1000,2).modulateScale(noise(0.25,0.05)))
    .modulateScale(osc(6,-0.5,2).kaleid(50))
    .mult(osc(3,-0.25,2).kaleid(50))
    .scale(0.5,0.5,0.75)
    .out(o2);
render(o2)