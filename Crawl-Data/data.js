const fs = require("fs");

const data2021 = JSON.parse(fs.readFileSync("./2021.json"));
const data2022 = JSON.parse(fs.readFileSync("./2022.json"));
const data2023 = JSON.parse(fs.readFileSync("./2023.json"));

const data = [{ 2021: data2021 }, { 2022: data2022 }, { 2023: data2023 }];

fs.writeFile("all-data.json", JSON.stringify(data), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});
