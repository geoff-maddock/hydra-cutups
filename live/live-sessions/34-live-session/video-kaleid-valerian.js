// Geoff Maddock / geoff.maddock@gmail.com
// https://github.com/geoff-maddock/hydra-cutups
// LIVE SESSION #34
// https://www.youtube.com/watch?v=Tq5eR7aPAqI&list=PLrphz00QE6Y2-zdVjkKr0S4Sn8q9uoIGu

// play video (Valarean?), and select after init
s0.initScreen()

// show audio
a.show()
a.setBins(8)

// select another window to overlay
// using MS Word with focus sort of works
// See: MS Word: Cutups-Method-LiveSession-TextOverlay.docx
// rotation pauses three, then rotates once 
// s1.initScreen()
// src(s1)
//   .rotate([0, 0, 0, Math.PI * 2], [0, 0, 0, Math.PI])
//   .out(o1)

// source from video, kaleidascope, and multiply by second source
src(s0)
  //.modulateScale(osc(4,-0.5,0).kaleid(50).scale(0.5),15,0)
  .kaleid(4)
  // this does some really cool randomish warping
  //.modulateScale(osc([10,5,3],0.05).thresh(0.5).rotate([0,0.1,0.5,-0.3]),()=>Math.sin(time)*0.5)
//   .rotate([0, 0, 0, Math.PI * 2], [0, 0, 0, Math.PI])
//   .scale(() => a.fft[0] / 2 + .5)
  .out(o0)


// Buffer can be an input to itself: osc(40, 0.1, 1) .modulate(src(o0), 0.1) .scale(1.1) .rotate(0.04) .out(o0)