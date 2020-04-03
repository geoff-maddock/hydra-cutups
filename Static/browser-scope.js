// browser-scope.js
// use to turn youtube or other video in browser into kaleidoscope
// hydra visuals
// https://github.com/geoff-maddock/hydra-cutups

s0.initScreen()
src(s0).kaleid(4)
    //.scale(()=>a.fft[0])
    .scale( ({time})=>Math.sin(time/50)*0.5 )
    // .rotate( ({time}) => time%3060, ({time}) => Math.sin(time*0.1)*0.05 )
    .out()