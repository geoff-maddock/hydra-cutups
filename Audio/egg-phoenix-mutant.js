// "egg of the phoenix"
// Alexandre Rangel
// www.alexandrerangel.art.br/hydra.html

speed=1.2
shape(99,.15,.5).color(0,1,2)

.diff( shape(a.fft[0] * 12 +1,.5,0).scrollX(.05).rotate( ()=>time/10 ).color(1,0,.75) )
.diff( shape(a.fft[0] * 6 +1 ,.4,.002).scrollX(.10).rotate( ()=>time/20 ).color(1,0,.75) )
.diff( shape(a.fft[0] * 36 + 1,.3,.002).scrollX(.15).rotate( ()=>time/30 ).color(1,0,.75) )

//   .diff( shape(99,.5,0).scrollX(.05).rotate( ()=>time/10 ).color(1,0,.75) )
// .diff( shape(99 ,.4,.002).scrollX(.10).rotate( ()=>time/20 ).color(1,0,.75) )
// .diff( shape(99,.3,.002).scrollX(.15).rotate( ()=>time/30 ).color(1,0,.75) )
  .diff( shape(99,.2,.002).scrollX(.20).rotate( ()=>time/40 ).color(1,0,.75) )
.diff( shape(99,.1,.002).scrollX(.25).rotate( ()=>time/50 ).color(1,0,.75) )

.modulateScale(
  shape(() => a.fft[0] * 12 +1,.5,0).scrollX(.05)
  .rotate( ()=>time/10 )
  , ()=>(Math.sin(time/3)*.2)+.2 )

.scale(1.6,.6,1)
.out()

// "egg of the phoenix"
// Alexandre Rangel + cutups automation refix
// www.alexandrerangel.art.br/hydra.html

// speed=1.2
// shape(99,.15,.5).color(0,1,2)

// .diff( shape(a.fft[0] * 12 +1,.5,0).scrollX(.05).rotate( ()=>time/10 ).color(1,0,.75) )
// .diff( shape(a.fft[0] * 6 +1 ,.4,.002).scrollX(.10).rotate( ()=>time/20 ).color(1,0,.75) )
// .diff( shape(a.fft[0] * 36 + 1,.3,.002).scrollX(.15).rotate( ()=>time/30 ).color(1,0,.75) )

//   .diff( shape(99,.5,0).scrollX(.05).rotate( ()=>time/10 ).color(1,0,.75) )
// .diff( shape(99 ,.4,.002).scrollX(.10).rotate( ()=>time/20 ).color(1,0,.75) )
// .diff( shape(99,.3,.002).scrollX(.15).rotate( ()=>time/30 ).color(1,0,.75) )

//   .diff( shape(99,.2,.002).scrollX(.20).rotate( ()=>time/40 ).color(1,0,.75) )
// .diff( shape(99,.1,.002).scrollX(.25).rotate( ()=>time/50 ).color(1,0,.75) )

// .modulateScale(
//   shape(() => a.fft[0] * 12 +1,.5,0).scrollX(.05)
//   .rotate( ()=>time/10 )
//   , ()=>(Math.sin(time/3)*.2)+.2 )

// .scale(1.6,.6,1)
// .out()