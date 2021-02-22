pb.setName("connect-webcam");

s0.initCam() // initialize a webcam in source buffer s0
src(s0).out() // render source buffer s0

s0.initCam() // initialize a webcam in source buffer s0
src(s0).kaleid(4).out() // render the webcam to a kaleidoscope