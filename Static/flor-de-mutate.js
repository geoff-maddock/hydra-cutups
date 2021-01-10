//Flor de Fuego
//https://flordefuego.github.io/
osc(.50,0.91,1)
.mult(osc(10,-0.1,1).modulate(noise(3,1)).rotate(0.7))
.posterize([time,10,2].fast(5).smooth(1))
.modulateRotate(o0,()=>mouse.x*0.003)
.out()