const fs = require("fs");

function read(fileName) {
  try {
    if (!fs.existsSync(fileName)) {
      return null;
    }

    let data = JSON.parse(fs.readFileSync(fileName, "utf8"));
    return data;
  } catch (error) {
    console.log("error extracting data from : ", fileName);
    return null;
  }
}

module.exports = { read };
