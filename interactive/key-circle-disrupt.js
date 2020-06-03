circle(.6).diff(osc(8))
    .modulateScrollY(src(o0).scale(.98),()=>key.up)
    .out(o0)