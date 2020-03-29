// SNARE UP / anti-social rave / March 28-29 2020
// CUTUPS set 12 - 1PM / Sunday March 29th
// https://soundcloud.com/cutups

// Visuals
// hydra-editor.glitch.me
// hardskatter.js
// geoff.maddock@gmail.com

osc(10, 0.9, 300)
    .color(0.9, 0.7, 0.8)
    .diff(
        osc(45, 0.3, 100)
            .color(0.9, 0.9, 0.9)
            .rotate(0.18)
            .pixelate(12)
            .kaleid()
    )
    .scrollX(10)
    .colorama()
    .luma()
    .repeatX(4)
    .repeatY(4)
    .modulate(
        osc(1, -0.9, 300)
    )
    .scale(2)
    .out()