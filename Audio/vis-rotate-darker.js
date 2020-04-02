// vizrotatedarker.js
// dark kaledoscope
// geoff.maddock@gmail.com
// audio https://soundcloud.com/cutups

s0.initCam() // initialize a webcam in source buffer s0

src(s0)
    .color(()=>a.fft[0],0,()=>a.fft[0]+1)
    .scale( ({time})=>Math.sin(time/50)*0.5 )
    .rotate( ({time}) => time%3060, ({time}) => Math.sin(time*0.1)*0.05 )
    .kaleid(6)
    .out() // render the webcam to a kaleidoscope
