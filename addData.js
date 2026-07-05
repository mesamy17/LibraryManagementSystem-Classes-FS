const fs = require("fs");
const r = require("./readData");

function add(fileName, fileData) {
  try {
    let data = r.read(fileName);
    let finalData = [];
    if (data == null) {
      finalData.push(fileData);
    } else {
      for (let i = 0; i < data.length; i++) {
        finalData.push(data[i]);
      }
      finalData.push(fileData);
    }

    fs.writeFileSync(fileName, JSON.stringify(finalData, null, 4));
    console.log("Data written in file:", fileName);
  } catch (error) {
    console.log("Error Adding Data in file:", fileName);
  }
}

module.exports = { add };
