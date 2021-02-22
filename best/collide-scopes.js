// Image Kaleidoscoper
// https://twitter.com/cymatist

img = document.createElement('img');
img.crossOrigin = "anonymous";
img.src = 'https://i.ibb.co/JkYzBWL/IMG-20200803-025345.jpg?format=jpg&name=orig';
img.onload = function() {
  s0.init({ src: img, dynamic: false })
};

slices = 8;
prog = ()=>{
  slices += 0.005;
  return slices;
}
src(s0)
.modulate(noise(3,0.1,0.1))
.scale(()=>1 + 0.6*Math.sin(time*0.01),1,1)
    .rotate(()=>-Math.PI*2*time*(0.01)) 
    .scrollX(0, ()=>time*-0.000015)
    .scrollY(0, ()=>time*-0.00001)
.kaleid(()=>prog())
.rotate(()=>Math.PI/8 -(Math.PI)/(2*prog()))
.scale(1,0.67,1)
    .out();
