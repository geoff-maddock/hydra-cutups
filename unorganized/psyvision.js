pattern = () => osc(36, 0,0.3).kaleid(5).scale(0.9, 0.6).pixelate(16,32);
pattern()
    .scrollY(0.1, -0.1)
    .scrollX(0.1,-0.1)
    .mult(pattern()
      .hue(0.3))
    .repeat(3,3)
    .kaleid(6)
    .repeat(2,2)
    .scale(2)
    .diff(src(o0).scale([1.03,1.04,1.05,1.04].fast(2)))
    .out(o0)

pattern = () => osc(36, 0,0.3).kaleid(5).scale(0.9, 0.6)
  .pixelate(16,32)
;
audioPump = () => a.fft[1];
pattern()
    .mult(pattern())
    .repeat(3,3)
    .kaleid(6)
    .repeat(2,2)
    .scale(2)
        .diff(src(o0).scale([1.03,1.04,1.05,1.04].fast(2)))
    .out(o0);

    pattern = () => osc(36, 0,0.3).kaleid(5).scale(0.9, 0.6)
    .pixelate(16,32)
  ;
  audioPump = () => a.fft[1];
  pattern()
      .mult(pattern())
      .repeat(3,3)
      .kaleid(6)
      .repeat(2,2)
      .scale(() => a.fft[0]*10+2)
          .diff(src(o0).scale([1.03,1.04,1.05,1.04].fast(2)))
      .out(o0);