const fs = require('fs');
// readStream methods ------------------
const readStream = fs.createReadStream('./doc/doc3.txt',{ encoding:'utf8'});
const writeStream = fs.createWriteStream('./doc/doc4.txt');

readStream.on('data', (chunk)=>{
    console.log('-----new chunk ---------');
    console.log(chunk);
    writeStream.write('\n new chun \n');
    writeStream.write(chunk);
});
console.log('bhanu');

// writeStream methods ----------------------------- ^

