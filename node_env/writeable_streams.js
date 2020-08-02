const stream = require("stream");
const writeable = new stream.Writable({
  highWaterMark: 10,
});
writeable._write = function (chunk, encoding, callback) {
  process.stdout.write(chunk);
  callback();
};
writeable.on("drain", function () {
  writeable.write("Z\n");
});
const buffer = new Buffer('20', 'utf-8');
buffer.fill("A");
console.log(writeable.write(buffer.toString()));
