const fs = require('fs');

fs.readFile('Day1Input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const lines = data.trim().split('\n');

  const leftColumn = [];
  const rightColumn = [];

  lines.forEach(line => {
    const [num1, num2] = line.trim().split(/\s+/).map(Number);
    leftColumn.push(num1);
    rightColumn.push(num2);
  });

  leftColumn.sort((a, b) => a - b);
  rightColumn.sort((a, b) => a - b);

  let sum = 0;
  const similarityHash = {};
  for (let i = 0; i < leftColumn.length; i++) {
    // Create hash of right column
    const rightColumnValue = rightColumn[i];
    if (!similarityHash[rightColumnValue]) {
        similarityHash[rightColumnValue] = 1;
    } else {
        similarityHash[rightColumnValue] = similarityHash[rightColumnValue] + 1;
    }
    // Sum of differences
    if (rightColumn[i] > leftColumn[i]) {
        sum += rightColumn[i] - leftColumn[i];
    } else {
        sum += leftColumn[i] - rightColumn[i];
    }
  }

  let similarityScore = 0;

  for (let i = 0; i < leftColumn.length; i++) {
    leftColumnValue = leftColumn[i];
    similarityScore += leftColumnValue * (similarityHash[leftColumnValue] || 0);
  }

  console.log('Sum of differences:', sum);
  console.log('Right Column Hash: ', similarityHash);
    console.log('Similarity Score: ', similarityScore);
});
