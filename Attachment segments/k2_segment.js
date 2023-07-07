const fs = require('fs');


// Sample variables
const segmentIdentifier = "K2";
const purchasedFromSoldToIndicator = "P";
const purchasedFromSoldToName = "ABC Company";
const reserved = " ";

// Generate the content of the K2 segment using template literals
const segmentContent = `${segmentIdentifier} ${purchasedFromSoldToIndicator} ${purchasedFromSoldToName} ${reserved} ${reserved}`;

// Specify the file path and name
const filePath = 'k2_report.txt';

// Write the file
fs.writeFile(filePath, segmentContent, (err) => {
  if (err) {
    console.error('Error writing the file:', err);
  } else {
    console.log(`File ${filePath} created successfully.`);
  }
});