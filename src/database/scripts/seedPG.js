const fs = require('fs');

// const { Aritst, artistSchema } = require('../models/artists.js');
// time TIMESTAMPTZ NOT NULL,
//     sensorId1 INT,
//     readingId VARCHAR (20) NOT NULL,
//     reading INT,
//     date_col DATE NOT NULL
const getRandomReading = (min, max) => {
  let fixedMin = Number.parseFloat(min).toFixed(2);
  let fixedMax = Number.parseFloat(max).toFixed(2);
  return Math.floor(Math.random() * (fixedMax - fixedMin) + fixedMin); 
};

const writeArtists = fs.createWriteStream('readings.csv');
writeArtists.write('sensorId,readingId,reading\n', 'utf8');

function writeUsers(artiststream, encoding, callback) {
  let i = 1000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const sensorId = 'BJenjRROw';
      const sensorName = 'Ph-sensor-1';
      const readingId = id;
      const reading = getRandomReading(5.89, 7.98);
      const data = `${sensorId},${readingId},${sensorName},${reading}\n`;
      if (i === 0) {
        artiststream.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = artiststream.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      artiststream.once('drain', write);
    }
  }
  write();
}

writeUsers(writeArtists, 'utf-8', () => {
  writeArtists.end();
});
