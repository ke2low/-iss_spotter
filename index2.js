// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation, printPassTimes } = require('./iss_promised');
// const { printPassTimes } = require('./index');

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then((passTimes) =>  {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work:", error.message);
  });