// using time as an input

osc(({time}) => Math.sin(time))
.out(o0);

// using the mouse position

osc(() => mouse.x).out(out(o0))