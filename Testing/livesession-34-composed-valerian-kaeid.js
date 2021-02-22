// Geoff Maddock / geoff.maddock@gmail.com
// https://github.com/geoff-maddock/hydra-cutups

// play video (Valarean?), and select after init
s0.initScreen()

a.show()
a.setBins(8)

// create a simple shape

// select another window to overlay
// using MS Word with focus sort of works
// rotation pauses three, then rotates once 
s1.initScreen()
src(s1)
  .rotate([0, 0, 0, Math.PI * 2], [0, 0, 0, Math.PI])
  .out(o1)

// source from video, kaleidascope, and multiply by second source
src(s0)
  .kaleid(4)
  .mult(o1)
  .out(o0)


// .diff - color swap, but keeps the color of the diff operand
// .blend - averages?  sort of greys out both
// .add - whites passed in show up, blacks are negative space
// .mult - blacks passed through show up, whites are negative space 

// Buffer can be an input to itself: osc(40, 0.1, 1) .modulate(src(o0), 0.1) .scale(1.1) .rotate(0.04) .out(o0)