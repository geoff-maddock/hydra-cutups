https://naotohieda.com/blog/hydra-book/?ref=hackernoon.com

// basic osc
osc(4,0).out(o0);

// scrolling
osc(4,1).out(o0);

// color and scroll
osc(4,1,4).out(o0);
//osc(4,1,8).thresh().out(o0)

// threshed to avg out areas but no color
osc(4,1,8).thresh().out(o0)

// posterize works to avg out areas with color
osc(4,1,8).posterize().out(o0)

// pixelate - handles colors and striping but only scrolls the color
osc(4,1,[1,4,1,16]).pixelate().out(o0)

// creates a kaleidascope, with a high number, makes a circle 
osc(4,1,[1,4,1,16]).pixelate().kaleid(200).out(o0)

//black and white circle
osc(200,0).kaleid(200).out(o0);

// geomatric?
osc(40,1,4).thresh().kaleid(3).out(o0);

// NOISE
noise(10,2).out(o0);

// VORONOI
voronoi(10,1).out();

// SHAPES
// shape(2).scale(.11).out(o0);

// n = 4
// a = () => shape(400,0.5).repeat(n,n)
// a().add(a().scrollX(0.5/n).scrollY(0.5/n),1).out()

// // RGB FILTER
// n = 50;
// func = () => osc(30,0.0,1).modulate(noise(4,0))
// pix = () => shape(4,0.3,0).scale(1,1,3).repeat(n,n)
// pix().mult(func().color(1,0,0).pixelate(n,n)).out(o1)
// pix().mult(func().color(0,1,0).pixelate(n,n)).scrollX(1/n/3).out(o2)
// pix().mult(func().color(0,0,1).pixelate(n,n)).scrollX(2/n/3).out(o3)

//solid().add(src(o1),1).add(src(o2),1).add(src(o3),1).out(o0)

// MODULATION
//osc(40,0,1).mult(shape(2,0.5,0).rotate(Math.PI/2).scrollX(.25)).add(noise(3.0).brightness().mult(shape(2,.5,0).rotate(Math.PI/2).scrollX(-.25))).mult(shape(2,.5).scrollY(.25)).out(o1);
//osc(40.0,1).modulate(noise(3,0)).mult(shape(2,.5,0).scrollY(-.25)).add(o1,1).out(o0);
// osc(40,.1,1).modulate(noise(3,0)).out(o0);
// noise(10, .1).modulate(o0).blend(o0,0.9).out(o0);
// voronoi(10, 1).modulate(o0).blend(o0,0.9).out(o0);
n = 3
a = () => shape(4,0.2,0.9).repeat(n,n)
a().add(a().scrollX(0.5/n).scrollY(0.5/n),1).shift(0.5).modulate(o1,0.1).modulate(src(o1).color(10,10).add(solid(-14,-14)),0.005).blend(o1,0.7).out(o1)
src(o1).shift(0.5).saturate(0).out(o0)





