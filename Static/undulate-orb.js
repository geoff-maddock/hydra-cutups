// by Zach Krall
// http://zachkrall.online/

osc( 215, 0.1, 2 )
    .modulate(
        osc( 2, -0.3, 100 )
            .rotate(15)
    )
    .mult(
        osc( 215, -0.1, 2)
            .pixelate( 5, 50 )
    )
    .color( .3, 0.9, 0.9 )
    .modulate(
        osc( 6, -0.1 )
            .rotate( 9 )
    )
    .add(
        osc( 10, -0.9, 900 )
            .color(0,1,1)
    )
    .mult(
        shape(900, 0.2, 1)
            .luma()
            .repeatX(1)
            .repeatY(1)
            .colorama(20)
    )
    .modulate(
        osc( 9, -0.3, 900 )
            .rotate( 6 )
    )
    .add(
        osc(4, 1, 90)
            .color(0,0.2,0,1)
    )
    .out()

