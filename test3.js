const Readable = require('stream').Readable;
class CReadable extends Readable {
    constructor(options) {
        super(options);
    }
    _read(size) {
        this.push(size.toString());
        this.push(null);
    }
}
const input = new CReadable();
input.on("data", console.log);
input.on("readable", function(){
    let data;
    while ( data == input.read()) {
        console.log(data);
        console.log(data.toString());
    }
});
//input.pause();
/**
 * Created by HP on 10/17/2016.
 */
