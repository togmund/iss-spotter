// Dependencies
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');


// Function Calls

// In index2.js, we should now add a reference to the fetchCoordsByIP function to our promise "chain", using .then(), immediately after the call to fetchMyIp.
// In other words, provide fetchCoordsByIP as a callback using .then so as to make it the next thing to be run after fetchMyIP is run.

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));