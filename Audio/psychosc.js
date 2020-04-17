osc(20, 0.03, 1.7).kaleid().mult(osc(20, 0.001, 0).rotate(Math.sin(0.25*time))).blend(o0, 0.80).modulateScale(osc(100, 0),-0.01).scale(0.8, () => (1.05 + 0.1 * Math.sin(0.5*time))).out(o0)

// osc(20, 0.03, 1.7).kaleid().mult(osc(20, 0.001, 0).rotate(1.58)).blend(o0, 0.80).modulateScale(osc(100, 0),-0.03).scale(0.8, () => (1.05 + 0.1 * Math.sin(0.25*time))).out(o0)