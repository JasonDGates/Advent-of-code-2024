const fs = require("fs");

fs.readFile("Day2Input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file: ", err);
    return;
  }

  const reports = data
    .trim()
    .split("\n")
    .map((line) =>
      line
        .split(/\s+/)
        .filter((num) => num !== "")
        .map(Number)
    );

  console.log(reports);

  const validateSequence = (a, b, c) => {
    const diff1 = b - a;
    const diff2 = c - b;

    const isValidIncrement = (diff) => diff >= 1 && diff <= 3;
    const isValidDecrement = (diff) => diff <= -1 && diff >= -3;

    if (
      (isValidIncrement(diff1) && isValidIncrement(diff2)) ||
      (isValidDecrement(diff1) && isValidDecrement(diff2))
    ) {
      return true;
    }
    return false;
  };

  let safeReports = 0;

  reports.forEach((report) => {
    let validReport = true;
    for (let i = 1; i < report.length - 1; i++) {
      const currentLevel = report[i];
      const previousLevel = report[i - 1];
      const nextLevel = report[i + 1];

      if (!validateSequence(previousLevel, currentLevel, nextLevel)) {
        validReport = false;
        break;
      }
    }
    if (validReport) {
      safeReports++;
    }
  });

  console.log(safeReports);
});

// are the two numbers between 1 and 3 from each other
console.log(Math.abs(3 - 1));
// Are they descending or ascending or the same
const changeDirection = "";
if (a < b) {
  changeDirection = "ascending";
}

if (a > b) {
  changeDirection = "descending";
}

if (a === b) {
  changeDirection = "flat";
}
