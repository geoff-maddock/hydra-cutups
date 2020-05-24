// osc(40,.1,1).modulate(noise(3,0)).out(o0);

// n = 3
// a = () => shape(4,0.2,0.9).repeat(n,n)
// a().add(a().scrollX(0.5/n).scrollY(0.5/n),1).shift(0.5).modulate(o1,0.1).modulate(src(o1).color(10,10).add(solid(-14,-14)),0.005).blend(o1,0.7).out(o1)
// src(o1).shift(0.5).saturate(0).out(o0)

// shape(400,0.5).repeat(40,40).modulate(osc(60,0).modulateScale(osc(8,.025)).kaleid(400),0.02).out(o0)

// shape(4,0.8).diff(src(o0).scale(0.9)).out(o0)






//voronoi(10,.5, 0).thresh(.5,0).diff(src(o0).scale(0.9)).out(o0);
solid().out(o0);
gradient(0).out(o0)
voronoi(10,.3,0).thresh(0.5,0).mask(shape(4,0.8,0)).diff(src(o0).scale(0.9)).out(o0);

// shape(4,0.9).add(src(o0).scale(0.9).rotate(0.1),-1).out(o0);



// shape(4,0.7).add(src(o0).scrollX(0.01),-1).out(o0)

osc(30,0,1).hue(0.5).out(o0)
osc(30,0,1).colorama(-0.1).out(o0)
osc(30,0,1).luma(0.5,0).out(o0)

osc(200,0,1).rotate(1).layer(osc(30,0,1).luma(0.5,0)).out(o0)
f=()=>osc(30,0,1)
osc(200,1,1).rotate(1).layer(f().saturate(0).luma(0.2,0.2).color(0,0,0,1)).layer(f().luma(0.5,0)).out(o0)
DD=0.01
b=(o,u,i,y,z)=>o().add(solid(1,1,1),DD).thresh(i*0.2*(z-y)+y,0).luma(0.5,0).color(c(u,i,0),c(u,i,1),c(u,i,2))
c=(u,i,j)=>{
  let cc = u.split("/"), cs = cc[cc.length - 1].split("-")
  return parseInt("0x" + cs[i].substring(2*j, 2+2*j))/255
}
colorize=(x,u,y=0,z=1)=>b(x,u,0,y,z).layer(b(x,u,1,y,z)).layer(b(x,u,2,y,z)).layer(b(x,u,3,y,z)).layer(b(x,u,4,y,z))

url='https://coolors.co/bbdef0-f08700-f49f0a-efca08-00a6a6'
func=()=>osc(20,.01,0).modulate(noise(4,0))
colorize(func,url).out()






