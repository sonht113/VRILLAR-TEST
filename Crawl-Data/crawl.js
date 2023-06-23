const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const URL2023 = "https://www.formula1.com/en/results.html/2023/races.html";
const URL2022 = "https://www.formula1.com/en/results.html/2022/races.html";
const URL2021 = "https://www.formula1.com/en/results.html/2021/races.html";

const URLDriver2023 =
  "https://www.formula1.com/en/results.html/2023/drivers.html";
const URLDriver2022 =
  "https://www.formula1.com/en/results.html/2022/drivers.html";
const URLDriver2021 =
  "https://www.formula1.com/en/results.html/2021/drivers.html";

const crawlDataRaceResult = async (url, year) => {
  request(url, function (err, res, body) {
    if (err) {
      console.log(err);
    } else {
      const arr = [];
      let $ = cheerio.load(body);
      $(".resultsarchive-table>tbody>tr").each(function (index) {
        const grandPrix = $(this)
          .find(":nth-child(2)>a")
          .text()
          .replace(/\n/, "")
          .split(" ")
          .join("")
          .replace(/\n/, "");
        const date = $(this).find(":nth-child(3)").text();
        const winner =
          $(this).find(":nth-child(4)>span:nth-child(1)").text() +
          " " +
          $(this).find(":nth-child(4)>span:nth-child(2)").text();
        const car = $(this).find(":nth-child(5)").text();
        const laps = $(this).find(":nth-child(6)").text();
        const time = $(this).find(":nth-child(7)").text();
        const obj = {
          grandPrix,
          date,
          winner,
          car,
          laps,
          time,
        };
        arr.push(obj);
      });
      fs.writeFile(
        `./data-result-of-race/race-result-${year}.json`,
        JSON.stringify(arr),
        function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("success");
          }
        }
      );
    }
  });
};

const crawlDataDriverResult = async (url, year) => {
  request(url, function (err, res, body) {
    if (err) {
      console.log(err);
    } else {
      const arr = [];
      let $ = cheerio.load(body);
      $(".resultsarchive-table>tbody>tr").each(function (index) {
        const position = $(this).find(":nth-child(2)").html();
        const driver =
          $(this).find(":nth-child(3)>a>span:nth-child(1)").text() +
          " " +
          $(this).find(":nth-child(3)>a>span:nth-child(2)").text();

        const nationality = $(this).find(":nth-child(4)").text();

        const car = $(this).find(":nth-child(5)>a").text();
        const point = $(this).find(":nth-child(6)").text();
        const obj = {
          position,
          driver,
          nationality,
          car,
          point,
        };
        console.log(obj);
        arr.push(obj);
      });
      fs.writeFile(
        `./data-result-of-driver/driver-${year}.json`,
        JSON.stringify(arr),
        function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("success");
          }
        }
      );
    }
  });
};

crawlDataRaceResult(URL2023, 2023);
crawlDataRaceResult(URL2022, 2022);
crawlDataRaceResult(URL2021, 2021);

crawlDataDriverResult(URLDriver2023, 2023);
crawlDataDriverResult(URLDriver2022, 2022);
crawlDataDriverResult(URLDriver2021, 2021);
