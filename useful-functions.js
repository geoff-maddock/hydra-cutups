// useful functions

// level of low end audio
// ()=>a.fft[0]

// level of high end audio
// ()=>a.fft[5]

// math
// ()=>Math.sin(time*0.1)

// modulus
// ()=>Math.sin(time) % 5

// modify source o0
src(o0).scale(1).scrollX(()=>Math.sin(time*0.1)*0.005).brightness(0.1).contrast(1.31)

// antila
// geometric and color functions
//https://github.com/ritchse/hydra-antlia/blob/master/antlia.js