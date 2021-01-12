
     











shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7].smooth(1))
.color(0.2,0.4,0.3)
.scrollX(()=>Math.sin(time*0.27))
.add(
  shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.5,0.3].smooth(1))
  .color(0.6,0.2,0.5)
  .scrollY(0.35)
  .scrollX(()=>Math.sin(time*0.33)))
.add(
  shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1))
  .color(0.2,0.4,0.6)
  .scrollY(-0.35)
  .scrollX(()=>Math.sin(time*0.41)*-1))
.add(
      src(o0).shift(0.001,0.01,0.001)
      .scrollX([0.05,-0.05].fast(0.1).smooth(1))
      .scale([1.05,0.9].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1))
      ,0.85)
.modulate(voronoi(10,2,2))
.scale(() => a.fft[0]+.5)
.out(o0)
​
noise(3,0.1,7)
.rotate(1,-1,-2).mask(shape(16))
.colorama(() => a.fft[0] / 2)
.modulateScale(o1)
.modulateScale(o1,1,)
.blend(o1)
.blend(o1)
.blend(o1)
.blend(o1)
​
osc().out(o2)
arr = [o0,o2];
render(o0)
