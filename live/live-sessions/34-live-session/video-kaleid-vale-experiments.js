// Geoff Maddock / geoff.maddock@gmail.com
// https://github.com/geoff-maddock/hydra-cutups

// play video (Valarean?), and select after init
s0.initScreen()

// show audio
a.show()
a.setBins(8)

// create a simple shape
// shape(3)
//   .scrollX(0, ({time}) => Math.sin(time*0.05)*0.05 )
//   .scrollY(0, ({time}) => Math.sin(time*0.01)*-0.07 )
//   .pixelate([1,5,2,10],[15,8])
//   .scale(() => a.fft[0])
// 	.out(o2)

// connect to other window
s1.initStream("cutups-method")
src(s1).out(o1)

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
  .kaleid(4)
  .blend(o1)
  // this does some really cool randomish warping
  //.modulateScale(osc([10,5,3],0.05).thresh(0.5).rotate([0,0.1,0.5,-0.3]),()=>Math.sin(time)*0.5)
  //.diff(o2)
  .out(o0)


// notes on additions
// .diff - color swap, but keeps the color of the diff operand
// .blend - averages?  sort of greys out both
// .add - whites passed in show up, blacks are negative space
// .mult - blacks passed through show up, whites are negative space 
// .layer
// .mask

// Buffer can be an input to itself: osc(40, 0.1, 1) .modulate(src(o0), 0.1) .scale(1.1) .rotate(0.04) .out(o0)