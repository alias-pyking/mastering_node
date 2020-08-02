const stream = require("stream");
const Feed = function (channel) {
  const readable = new stream.Readable({
    encoding: "utf-8",
  });
  const news = ["Bigwin", "Stocks Down!", "Actor Sad!"];
  readable._read = function () {
    if (news.length) {
      return readable.push(news.shift() + "\n");
    }
    readable.push(null);
  };
  return readable;
};

const feed = new Feed();
feed.on("readable", function () {
  const data = feed.read();
  data && process.stdout.write(data);
});
feed.on("end", function () {
  console.log("No more news!.");
});

// const readable = new stream.Readable({
//   objectMode: true,
// });
// const prices = [{ price: 1 }, { price: 2 }];
// readable.push(prices.shift());
