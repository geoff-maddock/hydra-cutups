osc(10, 0, 0.7).color(.1, .6, 1).rotate(0, -0.58).modulateRotate(o1, 0.4).out(o0)
osc(33).rotate(2, 0.4).modulateRotate(o0, () => (a.fft[0]*2)).out(o1)

