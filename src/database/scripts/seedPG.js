const fs = require('fs');

// const { Aritst, artistSchema } = require('../models/artists.js');
// time TIMESTAMPTZ NOT NULL,
//     sensorId1 INT,
//     readingId VARCHAR (20) NOT NULL,
//     reading INT,
//     date_col DATE NOT NULL
function getRandomReading(min, max) {
  const rand = Math.random() * (max - min) + min;
  const power = Math.exp(10).toFixed(2);
  return (Math.floor(rand * power) / power).toFixed(2);
}

function randomDate(date1, date2) {
  function randomValueBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  const newDate1 = date1 || '01-01-2020';
  const newDate2 = date2 || new Date().toISOString();
  const begindate = new Date(newDate1).getTime();
  const enddate = new Date(newDate2).getTime();
  if (begindate > enddate) {
    return new Date(randomValueBetween(begindate, enddate)).toISOString();
  }
  return new Date(randomValueBetween(begindate, enddate)).toISOString();
}

// const today = new Date(Date.now());
// today.toISOString().substring(0, 10);

const writeArtists = fs.createWriteStream('readings.csv');
writeArtists.write('time,sensorId1,readingId,reading,date\n', 'utf8');

function writeUsers(artiststream, encoding, callback) {
  let i = 1000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const sensorId1 = 'BJenjRROw';
      const readingId = id;
      const reading = getRandomReading(5.00, 7.99);
      const time = randomDate('01-01-2020', '12-24-2020', 1, 12);
      const date = time.substring(0, 10);
      const data = `${time},${sensorId1},${readingId},${reading},${date}\n`;
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
