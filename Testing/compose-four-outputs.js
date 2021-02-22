// compose multiple sources into one output
pb.setName("compose-four-outputs")

// init webcam source as source #0 (s0)
s0.initCam()

// send the source to output #0
src(s0).out(o0)

// create a gradient oscilator and diff with output 0 to combine with webcam
osc(10, 0.2, 0.8)
  .diff(o0)
  .rotate([Math.PI, 2 * Math.PI], [.1, .2, 1])
  .out(o1)
render(o1)

// .diff 
// .blend
// .add
// .mult
