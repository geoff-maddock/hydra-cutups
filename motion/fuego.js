//flor de fuego
noise(8,0.1).thresh(0.1)
.diff(noise(8,0.1).thresh(0.3))
.add(o0,0.99)
.out()