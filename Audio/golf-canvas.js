// GOLF-F*CKS
// voronoi(5,-0.1,()=>a.fft[0] * 10 + .5)
// .add(osc(1,0,1)).kaleid(()=>a.fft[0] * 5+ 1)
// .rotate(({time})=>Math.sin(time) )
// //.scrollX(0.5,2)
//   .scrollX(0, ({time}) => Math.sin(time*0.05)*0.05 )
//   .scrollY(0, ({time}) => Math.sin(time*0.01)*-0.07 )
// .scale(1,1,2)
//   .colorama().out(o1)
// src(o1).mult(src(s0).modulateRotate(o1,() => a.fft[3] * 500), -0.5)
//   .out(o0)

// GOLF-SWINGERS
voronoi(5,-0.1,()=>a.fft[0] * 10 + .5)
.add(osc(1,0,1)).kaleid(()=>a.fft[0] * 5 + 1)
.scrollX(0, () => mouse.x * .001 )
.scrollY(0, () => mouse.y * .001 )
.rotate(({time})=>Math.sin(time))
.scale(1,1,2).colorama().out(o1)
src(o1).mult(src(s0).modulateRotate(o1,() => a.fft[3] * 500), -0.5)
  .out(o0)


// MANIAC-GOLF
// voronoi(5,-0.1,()=>a.fft[0] * 10 + .5)
// .add(osc(1,0,1)).kaleid(()=>a.fft[0] * 5 + 1)
// .rotate(({time})=>Math.sin(time))
// .scale(1,1,2).colorama().out(o1)
// src(o1).mult(src(s0).modulateRotate(o1,() => a.fft[3] * 500), -0.5)
//   .out(o0)