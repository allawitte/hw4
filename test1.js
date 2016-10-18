const fs = require('fs');
const input = fs.createReadStream("input.txt");
const output = fs.createWriteStream("output.txt");

const crypto = require('crypto');

const hash = crypto.createHash('md5');
input.pipe(crypto.createHash('md5')).pipe(process.stdout);
input.pipe(crypto.createHash('md5')).pipe(output);
/**
 * Created by HP on 10/16/2016.
 */
