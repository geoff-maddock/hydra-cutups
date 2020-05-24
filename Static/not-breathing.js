osc(40,.1,1).modulate(noise(3,0)).out(o0);

n = 3
a = () => shape(4,0.2,0.9).repeat(n,n)
a().add(a().scrollX(0.5/n).scrollY(0.5/n),1).shift(0.5).modulate(o1,0.1).modulate(src(o1).color(10,10).add(solid(-14,-14)),0.005).blend(o1,0.7).out(o1)
src(o1).shift(0.5).saturate(0).out(o0)

shape(400,0.5).repeat(40,40).modulate(osc(60,0).modulateScale(osc(8,0)).kaleid(400),0.02).out(o0)