const Readable = require('stream').Readable;
const Writable = require('stream').Writable;
const Transform = require('stream').Transform;
class CReadable extends Readable {
    constructor(options) {
        super(options);
    }
    _read(size) {
        let num = Math.ceil(Math.random()*100);
        this.push(num.toString());

    }
}
class CWritable extends Writable {
    constructor(options) {
        super(options);
    }

    _write(chunk, enc, next) {
        console.log(chunk);
        next();
    }
};
class CTransform extends Transform {
    constructor(options) {
        super(options);
    }
    _transform(chunk, enc, cb) {
        var self = this;
        setTimeout(function(peace){
            //console.log(peace.toString());
            self.push((peace*2).toString());
            return () => {
                self.push(peace.toString());
               // console.log(peace.toString());
            }
        }(chunk), 100);



        cb();
    }
}

const input = new CReadable();
const write = new CWritable();
const tr = new CTransform();
input.pipe(tr).pipe(write);



/**
 * Created by HP on 10/17/2016.
 */
