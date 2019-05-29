// sunwarp-bluemute.js
// geoff.maddock@gmail.com

let n = .01

patternA = () => osc(({time}) => Math.sin(time) + 50, 0.1).kaleid(2000).scale(1, 0.4)
patternB = () => osc(({time}) => Math.sin(time),0.1, 10).kaleid(10)

patternA().scrollX(n, 0)
    .diff(patternA().scrollX(-n,0))
    .mult(osc(100, 0.01).rotate(0,-0.1).kaleid(50).modulate(patternB()))
    .color(() => Math.sin(time) % 30 ,() => Math.sin(time) + 10 % 30 ,() => Math.sin(time) + 25 % 30)
    .out()
