const fs = require("fs");

fs.readdirSync(__dirname).forEach((file) => {
  console.log(file);
});
