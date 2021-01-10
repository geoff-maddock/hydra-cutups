//Flor de Fuego
//https://flordefuego.github.io/
osc(30,0.01,1)
.mult(osc(20,-0.1,1).modulate(noise(3,1)).rotate(0.7))
.posterize([3,10,2].fast(0.5).smooth(1))
.modulateRotate(o0,()=>mouse.x*0.003)
.out()