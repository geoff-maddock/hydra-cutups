voronoi(0.1,0.07)
.diff(noise(10.15,0.07))
.rotate(-0.01, -0.01)
.diff(src(o0).scale(0.9))
.modulate(osc(10,0.01))
.modulate(src(o0))
.blend(src(o0).scale(0.99))
.blend(solid(() => (Math.sin(time*0.5)),() => (Math.sin(time*0.2)),() => (Math.sin(time*0.8))))
.out()