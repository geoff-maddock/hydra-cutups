// speed = 0.3

// // shape(20,0.2,0.3)
// // .color(0.5,0.8,50)
// //   .scale(() => Math.sin(time)+1*2)
// //   .repeat(() => Math.sin(time)*10)
// //   .modulateRotate(o0)
// //   .scale(() => Math.sin(time)+1 *1.5)
// //   .modulate(noise(2,2))
// //   .rotate(1, .2)
// //   // .invert(2.4)
// // .out(o0)

// // s0.initScreen()
// // src(s0).blend(o0).out(o1)
// // render(o1)

// s0.initScreen()
// src(s0).color(0.5,0.8,50)
//   .scale(() => Math.sin(time)+1*2)
//   .repeat(() => Math.sin(time)*10)
//   .modulateRotate(o0)
//   .scale(() => Math.sin(time)+1 *1.5)
//   .modulate(noise(2,2))
//   .rotate(1, .2)
//   // .invert(2.4)
// .out(o0)
// render(o1)

// // more of a warp
// speed = 0.3

// // audio
// a.show()

// // screen capture
// s0.initScreen()

// // blend and output
// src(s0).color(0.5,0.8,50)
//   .scale(() => Math.sin(time)+1*2)
//   .repeat(() => Math.sin(time)*10)
//   .modulateRotate(o0)
//   .scale(() => Math.sin(time)+1 *1.5)
//   .modulate(noise(2,2))
//   .rotate(1, .2)
//   // .invert(2.4)
// .out(o0)

// src(o0).blend(o0).out(o1)
// render(o1)

// TETSUO IRON MAN warp and layer
speed = 0.3

// audio
a.show()

// screen capture
s0.initScreen()


// blend and output
src(s0)
  .kaleid(4)
  .blend(s0)
.modulateRotate(src(o0).scale(() => a.fft[0] + 0.5),0.125)
.modulateScale(src(o0).scale(() => a.fft[1] + 0.5),0.125)
.out(o0)

render(o0)