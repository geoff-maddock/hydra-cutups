// trans-nodal-skatterbar

// init name of screen
pb.setName("cutups-method");

// set up eq bands
//a.setBins(6)
a.show()

osc(100,0.01)
.thresh(0.89, () => a.fft[0]*.01)
.color(0,1,1)
.scrollX(0.01,() => a.fft[0]*0.00001)
.out(o1)

osc([100, 10, 200])
.thresh(0.20,0.01)
.color(1,0,1)
.kaleid(2)
.saturate(2)
.out(o2)

src(o1)
.mult(shape(4)
    .kaleid(4)
    .scale([0.5, 0.2, 0.8])
    .repeat([2,3,4],1)
    .scrollX(0.1, () => a.fft[3]*0.5)
)
.add(o2,.01)
.add(o0, ()=>a.fft[1] * 0.6)
.out(o3)

osc(200)
.thresh(0.00, 0.9)
.color(0,1,0)
.rotate(0.1, 0.4)
.mult(shape(4).scale([2,3,4])
    .repeat(10,10)
    .scrollY(0.1,0.3)
)
.out(o0)

render(o3)