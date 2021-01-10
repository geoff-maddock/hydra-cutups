osc(100,-0.01245,1).pixelate(50).kaleid(()=>(Math.sin(time/8)*9+3)).rotate(0,0.125)
.modulateRotate(shape(3).scale(()=>(Math.cos(time)*2)).rotate(0,-0.25)).diff(src(o0)
//                                                                              .brightness(() => a.fft[0]*10))
                                                                             .brightness(.3)
  .out()

//   osc(100,-0.01245,1).pixelate(50).kaleid(()=>(Math.sin(time/8)*9+3)).rotate(0,0.125)
// .modulateRotate(shape(3).scale(()=>(Math.cos(time)*2)).rotate(0,-0.25)).diff(src(o0).brightness(() => a.fft[0]*.5 +.1))
//   .out()