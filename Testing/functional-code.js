// Geoff Maddock / geoff.maddock@gmail.com
// https://github.com/geoff-maddock/hydra-cutups

// Testing out using functions to compose hydra effects

// TODO 
// - Use audio to create cumulative rotation or zoom effects and have them ramp down after no audio input
// - Add functionality that lets you position text into a layer?

// dev flags
consoleLogging = true;

// global vars
rotationAngle = 0;
rotationSpeed = 0;

// expressed in radians = 6.283 = 360 degrees
maxRotationAngle = 6.283;
minRotationAngle = -6.283;

// 2 speed is 1 rotation / second
pi = Math.PI;

maxRotationSpeed = 20;
minRotationSpeed = 0;

// current count of audio input values that have counted for each parameter
angleCounter = 0;
speedCounter = 0;

// minimum audio input threshold
minMeterValue = 0;

// how many cycles with no input before reseting rotation counter
resetCountAfter = 200;

// show the audio levels
// default values go from 0 to 1, but the granularity is unclear
a.show()
a.setBins(10)
// a.setCutoff(val) // should work the same way as minMeter

// just returns the audio buffer if over a min value?
sendAudio = () => {
  moment = a.fft[0];
  // only log if metering
  if (moment > minMeterValue) {
    console.log('Sent Audio Level[0]: ' + moment);
  }
  return moment;
}

/**
 * Requires that the passed value be over the minimum metering threshold
 **/
meterCheck = (value) => {
    if (value > minMeterValue) {
        return value;
    }
    return 0;
}

/**
 * Meters angle - which maxes out at 6.283
 */
meterCheckAngle = (value) => {
    if (value > minMeterValue) {
        return value / 100;
    }
    return 0;
}

/**
 * Meters speed - not sure what the range of speeds are
 */
meterCheckSpeed = (value) => {
    if (value > minMeterValue) {
        return value / 100;
    }
    return 0;
}

/**
 * Returns the current rotation angle based on audio level and stored counters
 */
audioRotationAngle = () => {
    increaseAngle = meterCheckAngle(a.fft[2]);
    
    // if there was no increase, add to reset counter
    if (increaseAngle == 0) {
        angleCounter = angleCounter + 1;
        // alt = reduce speed very slowly for each zero count?
        if (rotationAngle > 0) {
            rotationAngle = rotationAngle - .001;
        }
   	
      	if (rotationAngle < 0) {
            rotationAngle = 0;
          }

        } else {
        rotationAngle = rotationAngle + increaseAngle;
    }

    // reset angle if over max
    if (rotationAngle > maxRotationAngle) {
        rotationAngle = 0;
    }

    // reset angle if no input has been hit 
    if (angleCounter > resetCountAfter) {
        rotationAngle = 0;
        angleCounter = 0;
    }

    if (consoleLogging) {
        console.log('Rotation Angle: ' + rotationAngle);
        // console.log('Angle counter: ' + angleCounter)
    }
    return rotationAngle;
}

/**
 * Returns the current rotation speed based on audio level and stored counters
 */
audioRotationSpeed = () => {
    // check that the audio is metering
    increaseSpeed = meterCheckSpeed(a.fft[0]);

    // if there was no increase, add to reset counter
    if (increaseSpeed == 0) {
        speedCounter = speedCounter + 1;
        // alt = reduce speed very slowly for each zero count?
        if (rotationSpeed > 0) {
            rotationSpeed = rotationSpeed - .001;
        }
      	
      	if (rotationSpeed < 0) {
          rotationSpeed = 0;
        }
      
    } else {
        rotationSpeed = rotationSpeed + increaseSpeed;
    }

    // reset speed if over max
    if (rotationSpeed > maxRotationSpeed) {
        rotationSpeed = 0;
    }

    // reset angle if no input has been hit 
    if (speedCounter > resetCountAfter) {
        rotationSpeed = 0;
        speedCounter = 0;
    }

    if (consoleLogging) {
        console.log('Rotation Speed: ' + rotationSpeed);
        // console.log('Speed counter: ' + speedCounter)
    }

    return rotationSpeed;
}

// rotate(angle, speed)
// angle in radians 0 - 6.283
// speed in 

// Simple Version
osc(21, 0.09, 0.5)
  .kaleid(9)
  //.repeat(2,2)
  .rotate(() => audioRotationAngle(), () => audioRotationSpeed())
  //.diff(src(o0).scale(1).rotate(2))
  .out()

// TRIP TOY VERSION
// osc(21, 0.09, 0.5)
//   .pixelate(20,20)
//   .kaleid(9)
//   .repeat(2,2)
//   .pixelate(140,160)
//   .rotate(() => audioRotationAngle(), () => audioRotationSpeed())
//   .diff(src(o0).scale(1).rotate(2))
//   .pixelate()
//   .out()
