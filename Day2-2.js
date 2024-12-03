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

  const isSafeReport = (report) => {
    const signs = { [1]: 0, [-1]: 0 };
    for (let i = 0; i < report.length; i++) {
      const currentLevel = report[i];
      const nextLevel = report[i + 1];

      const difference = nextLevel - currentLevel;
      const absDifference = Math.abs(difference);

      if (absDifference > 3 || absDifference < 1) return;
      if (currentLevel === nextLevel) return;
      signs[Math.sign(difference)]++;
    }
    return signs[1] < 1 || signs[-1] < 1;
  };

  let validReports = 0;

  for (const report of reports) {
    if (isSafeReport(report)) validReports++;
  }

  console.log(validReports);
});
