const fs = require('fs');

// const { Aritst, artistSchema } = require('../models/artists.js');

const writeArtists = fs.createWriteStream('readings.csv');
writeArtists.write('artistId,artistName,avatar,bio\n', 'utf8');

function writeUsers(artiststream, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const artistName = faker.internet.userName();
      // eslint-disable-next-line quotes
      const avatar = faker.image.avatar();
      const bio = 'Artist';
      const data = `${id},${artistName},${avatar},${bio}\n`;
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
