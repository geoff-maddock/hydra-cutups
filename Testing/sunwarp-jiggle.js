// sunwarp-jiggle.js
// geoff.maddock@gmail.com

let n = .49

patternA = () => osc(({time}) => Math.sin(time) + 50, 0.1).kaleid(2000).scale(1, 0.4)
patternB = () => osc(({time}) => Math.sin(time),0.1, 10).kaleid(10)

patternA().scrollX(n, 0)
    .diff(patternA().scrollX(-n,0))
    .mult(osc(100, 0.01).rotate(0,-0.1).kaleid(50).modulate(patternB()))
    .color(5,1,0)
    .out()