//@HirotoshiUchida 
a.show();
shape(1,[0,1].smooth(),[0,1].reverse().smooth()).brightness([-1,1].smooth()).mult(osc(60,1/8,300).luma().kaleid(1).rotate(1.57/2)).modulateRotate(osc(Math.PI/2)).sub(osc(1,2,300).diff(gradient(1)).contrast([1,3].reverse().fast())).scale([0,2].smooth().fast(1/2)).rotate(.1,.1)
  .out()