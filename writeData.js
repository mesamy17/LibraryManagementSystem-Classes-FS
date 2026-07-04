const fs = require("fs");

function write(fileName, data) {
  try {
    fs.writeFileSync(fileName, JSON.stringify(fileData, null, 4));

    console.log("Data written in file:", fileName);
  } catch (error) {
    console.log("Error Writting Data in file:", fileName);
  }
}

module.exports = { write };
