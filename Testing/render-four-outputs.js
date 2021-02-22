// using time
pb.setName("using-time")

osc(({time}) => Math.sin(time))
    .out(o0);

osc(({time}) => Math.sin(time / 2))
    .out(o1);

osc(({time}) => Math.sin(time / 4))
    .out(o2);

osc(({time}) => Math.sin(time / 8))
    .out(o3);

s0.initStream("cutups-method")
src(s0)
  .out(o3)

// renders all four outputs
render()