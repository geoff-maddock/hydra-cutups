// chromahaze.js
// hazey chromatic lights
// geoff.maddock@gmail.com
// audio https://soundcloud.com/cutups
osc(3, 0.169, 0).color(2, 0.7, 1).modulate(o1, 0.8).diff(o1).out(o0);
osc(() => a.fft[0] * 39, 0.244, 0.632).color(0, 1, 2).rotate(1.57).out(o1);
osc(30, 0.2, 0).out(o2);