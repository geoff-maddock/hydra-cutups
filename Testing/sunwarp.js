// sunwarp.js
// geoff.maddock@gmail.com

pattern = () => osc(200, 0.1).kaleid(200).scale(1, 0.4)
pattern2 = () => osc(10,0.1, 100).kaleid(10)
let n = 0.49

pattern().scrollX(n, 0)
    .diff(pattern().scrollX(-n,0))
    .mult(osc(200, 0.01).rotate(0,-0.1).kaleid(50).modulate(pattern2()))
    .color(5,1,0)
    .out()