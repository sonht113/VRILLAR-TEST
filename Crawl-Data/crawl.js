const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const URL2023 = "https://www.formula1.com/en/results.html/2023/races.html";
const URL2022 = "https://www.formula1.com/en/results.html/2022/races.html";
const URL2021 = "https://www.formula1.com/en/results.html/2021/races.html";

const crawlData = async (url, year) => {
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
      fs.writeFile(`${year}.json`, JSON.stringify(arr), function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
    }
  });
};

crawlData(URL2023, 2023);
crawlData(URL2022, 2022);
crawlData(URL2021, 2021);
