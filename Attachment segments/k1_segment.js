const fs = require('fs');

// Sample variables
const segmentIdentifier = "K1";
const originalCreditorName = "Client-Name";
const creditorClassification = "04";

// Generate the content of the K1 segment using template literals
const segmentContent = `${segmentIdentifier} ${originalCreditorName} ${creditorClassification}`;

// Specify the file path and name
const filePath = 'k1_report.txt';

// Write the file
fs.writeFile(filePath, segmentContent, (err) => {
  if (err) {
    console.error('Error writing the file:', err);
  } else {
    console.log(`File ${filePath} created successfully.`);
  }
});