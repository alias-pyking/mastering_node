const mymodule = require("./mymodule.js");
const pathToDir = process.argv[2];
const extension = process.argv[3];
const callback = (error, list) => {
  if (error) {
    console.log(error);
  } else {
    list.forEach((file) => {
      console.log(file);
    });
  }
};
// callback(null, ["a", "a", "c"]);
// console.log("hey");
mymodule(pathToDir, extension, callback);
