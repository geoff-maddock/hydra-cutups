// connecting to seperate windows
// open hydra in two windows and set a name for the patchbay source
pb.setName("cutups-method");

// from the other window, initiate the name above as the source name
s0.initStream("cutups-method");

// render to the screen
s0.initStream("myGraphics")
src(s0).out()

// to get a list of sources
pb.list()