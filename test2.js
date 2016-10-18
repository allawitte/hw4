const fs = require('fs');
const input = fs.createReadStream("input.txt");
const output = fs.createWriteStream("output1.txt");

const crypto = require('crypto');

const hash = crypto.createHash('md5');
const Transform = require('stream').Transform;

class MyTransform extends Transform {
    constructor(options) {
        super(options);
    }
    _transform(chunk, enc, cb) {
        console.log(chunk.toString("hex"));
         this.push(chunk.toString("hex"));

        cb();
    }
}


input.pipe(crypto.createHash('md5')).pipe(new MyTransform()).pipe(process.stdout);
input.pipe(crypto.createHash('md5')).pipe(new MyTransform()).pipe(output);

/**
 * Created by HP on 10/16/2016.
 */

/**
 * Created by HP on 10/16/2016.
 */
