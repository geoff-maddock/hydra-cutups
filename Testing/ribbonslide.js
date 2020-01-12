// ribbonslide.js
// geoff.maddock@gmail.com

url='https://coolors.co/5c2751-6457a6-9dacff-76e5fc-4bc0d9'

DD=0.02;
b=(o,u,i,y,z)=>o().add(solid(1,1,1),DD).thresh(i*0.2*(z-y)+y,0).luma(0.5,0).color(c(u,i,0),c(u,i,1),c(u,i,2));
c=(u,i,j)=>{let cc = u.split("/"), cs = cc[cc.length - 1].split("-");return parseInt("0x" + cs[i].substring(2*j, 2+2*j))/255;};
colorize=(x,u,y=0,z=1)=>b(x,u,0,y,z).layer(b(x,u,1,y,z)).layer(b(x,u,2,y,z)).layer(b(x,u,3,y,z)).layer(b(x,u,4,y,z));

y=()=>shape(8,0.3,1).repeat(5,20).scrollX(.1,.8)
z=(t=0.75)=>osc(30).rotate(.5).modulate(osc(40),.02).luma(t,0.0)
v=(t=0.75)=>osc(30).rotate(-.2).modulate(osc(20),.01).luma(t,0.0)
colorize(y,url,0.2,1.2)
    .color(0.8,0.8,0.8)
    .layer(z(0.1,0.75).luma(0.2,0.2) .color(0,0,0,0.7))
    .layer(colorize(z,url,0.75,1).luma(0.1,0.0))
    .layer(v(0.1,0.75).luma(0.2,0.2).color(0,0,0,0.7))
    .layer(colorize(v,url,0.75,1).luma(0.1,0.0))
    .out()

