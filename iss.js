/*
The Approach
We'll be making API requests to three different services to solve this problem.

Fetch our IP Address
Fetch the geo coordinates (Latitude & Longitude) for our IP
Fetch the next ISS flyovers for our geo coordinates
Each later step is dependent on data from the previous one.

We will eventually be able to use our app in the following way:

> node index.js
Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!
*/


/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const data = JSON.parse(body);
      callback(error, data.ip);
      return;
    }
  });
};

module.exports = { fetchMyIP };
// module.exports = { issSomething };