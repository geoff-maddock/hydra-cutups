// Initialize a new p5 instance It is only necessary to call this once
//await loadScript("https://github.com/mrdoob/three.js/blob/master/examples/jsm/WebGL.js")

p5 = new P5({mode: 'WEBGL'}) // {width: window.innerWidth, height:window.innerHeight, mode: 'P2D'}

let colors = ["#ffcc4d", "#f5b800", "#56a1c4", "#4464a1", "#ee726b", "#df5f50"];

//p5.createCanvas(500, 500, WEBGL);
p5.noStroke();
p5.noLoop();
p5.shuffle(colors, true);

p5.draw = () => {
  p5.translate(-width/2, -height/2);
  p5.background(255);
  let margin = 50;

  let n = 6;
  let s = 100/p5.sqrt(3);
  for (let i = -n; i <= n; i++) {
    for (let j = -n; j <= n; j++) {
      if (p5.abs(j) < 3) {
        let x1 = width/2+(i*p5.sqrt(3) + j*p5.sqrt(3)/2)*s;
        let y1 = height/2+(j*3/2)*s;
        let id = 0;
        for (let theta = p5.PI/6; theta < p5.TAU; theta += p5.PI/3) {
          let x2 = x1 + s*p5.cos(theta), y2 = y1 + s*p5.sin(theta);
          let x3 = x1 + s*p5.cos(theta+p5.PI/3), y3 = y1 + s*p5.sin(theta+p5.PI/3);
          makeTriangle(x1, y1, x2, y2, x3, y3, (id++)%3);
        }
      }
    }
  }

  p5.fill(255);
  p5.rect(0, 0, margin, height);
  p5.rect(width-margin, 0, margin, height);
}

makeTriangle = (x1, y1, x2, y2, x3, y3, id) => {
  let x0 = (x1+x2+x3)/3, y0 = (y1+y2+y3)/3;

  p5.push();
  p5.translate(x0, y0);
  let rot = p5.floor(p5.random(3));
  p5.rotate(rot*p5.TAU/3);

  p5.fill("#001a5b");
  makeQuad(x0, y0, x1, y1, x2, y2, x3, y3, id, 1/5);

  p5.fill(colors[rot]);
  makeQuad(x0, y0, x1, y1, x2, y2, x3, y3, id, 1/3);

  p5.pop();
}

makeQuad = (x0, y0, x1, y1, x2, y2, x3, y3, id, p) => {
  let xA, yA, xB, yB, xC, yC, xD, yD;
  if (id == 0) {
    [xA, yA] = lerp2D(x1, y1, x2, y2, p);
    [xB, yB] = lerp2D(x2, y2, x1, y1, p);
    [xC, yC] = lerp2D(x2, y2, x3, y3, p);
    [xD, yD] = lerp2D(x3, y3, x2, y2, p);
  } else if (id == 1) {
    [xA, yA] = lerp2D(x3, y3, x1, y1, p);
    [xB, yB] = lerp2D(x1, y1, x3, y3, p);
    [xC, yC] = lerp2D(x2, y2, x3, y3, p);
    [xD, yD] = lerp2D(x3, y3, x2, y2, p);
  } else {
    [xA, yA] = lerp2D(x1, y1, x2, y2, p);
    [xB, yB] = lerp2D(x2, y2, x1, y1, p);
    [xC, yC] = lerp2D(x3, y3, x1, y1, p);
    [xD, yD] = lerp2D(x1, y1, x3, y3, p);
  }
  p5.quad(xA - x0, yA - y0, xB - x0, yB - y0, xC - x0, yC - y0, xD - x0, yD - y0);
}

lerp2D = (x1, y1, x2, y2, t) => {
  let x3 = (1-t)*x1 + t*x2;
  let y3 = (1-t)*y1 + t*y2;
  return [x3, y3];
}

//p5.rect(300, 100, 100, 100)

// To use P5 as an input to hydra, simply use the canvas as a source:
s0.init({src: p5.canvas})

// Then render the canvas
src(s0).kaleid(4).out(o1)






