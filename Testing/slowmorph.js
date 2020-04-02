// cutups - geoff.maddock@gmail.com
// hydra visuals
// https://github.com/geoff-maddock/hydra-cutups
// more music
// https://soundcloud.com/cutups

a.show();
a.setBins(4);

osc(3, 0.1, 0.8).color(1.5, 3.0, 0).luma([0.1,0.25,0.75,1].fast(0.25),0.1).rotate(0.30, 0.1).pixelate(2, 20).modulate(noise(0.747), () => 1 * Math.sin(0.08 * time)).out(o0);
//osc(4, 0.1, 0.8).color(-1.54, .5, 3.1).rotate(0.30, () => mouse.x / 180).pixelate(2, 20).modulate(noise(0.747), () => 1 * Math.sin(0.08 * time)).out(o0);
// osc(4, 0.1, 0.8).color(-1.54, .5, 3.1).rotate(0.30, .10).pixelate(2, 20).modulate(noise(0.747), () => 1 * Math.sin(0.08 * time)).contrast( ({time}) => Math.sin(time) * 20 ).out(o0);
// osc(4, 0.1, 0.8).color(-1.358, 0.738, 5.721).rotate(() => a.fft[0] * 0.02, () => a.fft[0] * 0.01).pixelate(3.875, 21.36).modulate(noise(0.846), () => 1 * Math.sin(0.5 * time)).out(o0);
