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
        /*
        for(let i = 0; i < chunk.length; i ++){
            let res = chunk[i].toString(16);
            console.log(res);
            this.push(res);
        }
         */
         this.push(chunk);


        //this.push(chunk);
        cb();
    }
}
const tr = new MyTransform();
//input.pipe(output);

input.pipe(tr).pipe(process.stdout);
input.pipe(tr).pipe(output);
/*
input.pipe(tr).pipe(hash).pipe(output);
input.pipe(tr).pipe(hash).pipe(output);

/**
 * Created by HP on 10/16/2016.
 */

/**
 * Created by HP on 10/16/2016.
 */
