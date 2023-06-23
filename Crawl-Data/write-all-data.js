const fs = require("fs");

const dataRace2021 = JSON.parse(
  fs.readFileSync("./data-result-of-race/race-result-2021.json")
);
const dataRace2022 = JSON.parse(
  fs.readFileSync("./data-result-of-race/race-result-2022.json")
);
const dataRace2023 = JSON.parse(
  fs.readFileSync("./data-result-of-race/race-result-2023.json")
);

const dataDriver2021 = JSON.parse(
  fs.readFileSync("./data-result-of-driver/driver-2021.json")
);
const dataDriver2022 = JSON.parse(
  fs.readFileSync("./data-result-of-driver/driver-2022.json")
);
const dataDriver2023 = JSON.parse(
  fs.readFileSync("./data-result-of-driver/driver-2023.json")
);

const dataRaceAll = [
  { year: "2021", data: dataRace2021 },
  { year: "2022", data: dataRace2022 },
  { year: "2023", data: dataRace2023 },
];

const dataDriverAll = [
  { year: "2021", data: dataDriver2021 },
  { year: "2022", data: dataDriver2022 },
  { year: "2023", data: dataDriver2023 },
];

fs.writeFile(
  "./data-result-of-race/all-data-race.json",
  JSON.stringify(dataRaceAll),
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  }
);

fs.writeFile(
  "./data-result-of-driver/all-data-driver.json",
  JSON.stringify(dataDriverAll),
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  }
);
