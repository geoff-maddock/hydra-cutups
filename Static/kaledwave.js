b=(o,t1,t2)=>src(o).add(solid(1,1,1),0.01).luma(t1,0.0).mult(src(o).add(solid(1,1,1),-0.01).invert().luma(1-t2,0.0)).thresh(0.0001,0.0)
c=(i,j)=>{let cc = 'https://coolors.co/f3ffbd-247ba0-70c1b3-b2dbbf-ff1654'.split("/"), cs = cc[cc.length - 1].split("-");return parseInt("0x" + cs[i].substring(2*j, 2+2*j))/255;}
d=(o,i)=>b(o,i*0.2,(i+1)*0.2).color(c(i,0),c(i,1),c(i,2))
d(o1,0).layer(d(o1,1)).layer(d(o1,2)).layer(d(o1,3)).layer(d(o1,4)).out(o2)
x=()=>osc(40,0.1,0).modulate(noise(10,0.1),0.1)
x().out(o1)
src(o2).kaleid(6).modulateRotate(osc(3,0.2).kaleid(100),2).out(o0)