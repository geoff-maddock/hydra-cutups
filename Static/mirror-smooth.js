// Mahalia H-R
// IG: @mm_hr_

shape(() => Math.sin(time)+1*2)
.rotate(() => Math.PI * mouse.x /180)
.repeatX(3)
.repeatY(()=>Math.sin(time)*5)
.scale(() => Math.PI/4)
.blend(src(o0).color(1,0,0))
.modulate(osc(20, 0,.4))
.kaleid(2)
 .out(o0)

render(o0)