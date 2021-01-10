a.show();
b = (o, t1, t2) =>
  src(o)
    .add(solid(1, 1, 1), 0.01)
    .luma(t1, 0.0)
    .mult(
      src(o)
        .add(solid(1, 1, 1), -0.01)
        .invert()
        .luma(1 - t2, 0.0)
    )
    .thresh(0.0001, 0.0);
c = (i, j) => {
  let cc = "https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff".split(
      "/"
    ),
    cs = cc[cc.length - 1].split("-");
  return (
    parseInt(
      "0x" + cs[i].substring(2 * j, 2 + 2 * j)
    ) / 255
  );
};
b(o1, 0.0, 0.2)
  .color(c(0, 0), c(0, 1), c(0, 2))
  .layer(
    b(o1, 0.2, 0.8).color(
      c(1, 0),
      c(1, 1),
      c(1, 2)
    )
  )
  .layer(
    b(o1, 0.8, 1).color(c(2, 0), c(2, 1), c(2, 2))
  )
  .hue(() => a.fft[3] * 0.25)
  .out(o2);
x = () =>
  osc(40, 0.1, 0).modulate(
    noise(() => a.fft[0] * 20, 0.1)
  );
x().out(o1);
src(o2)
  .kaleid(40)
  .layer(
    src(o2)
      .kaleid(40)
      .diff(
        src(o2).modulateKaleid(
          osc(3, 0.5).color(0.2),
          40
        )
      )
      .luma(0.5, 0.0)
      .hue(0.1)
  )
  .out(o0);
