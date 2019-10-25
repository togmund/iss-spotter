// Dependencies
const { nextISSTimesForMyLocation } = require('./iss_promised');


// Function Calls

// In index2.js, we should now add a reference to the fetchCoordsByIP function to our promise "chain", using .then(), immediately after the call to fetchMyIp.
// In other words, provide fetchCoordsByIP as a callback using .then so as to make it the next thing to be run after fetchMyIP is run.

const logPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setSeconds(pass.risetime);
    console.log(`Next pass at ${datetime.toLocaleString("en-US", {timeZone: "America/Los_Angeles"})} for ${Math.floor(pass.duration / 60)} minutes!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    logPassTimes(passTimes);
  })