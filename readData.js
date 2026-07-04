const fs = require("fs");

function read(fileName, id) {
  try {
    if (!fs.existsSync(fileName)) {
      return null;
    }

    let data = JSON.parse(fs.readFileSync(fileName, "utf8"));

    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        let returnData = data[i];
        return returnData;
      }
    }
  } catch (error) {
    console.log("error extracting data from : ", fileName);
    return null;
  }
}

module.exports = { read };
