const fs = require('fs');

// Sample variables
const segmentIdentifier = "K3";
const agencyIdentifier = "AG";
const accountNumber = "1234567890";
const mortgageIdentificationNumber = "MORT123456";

// Generate the content of the K3 segment using template literals
const segmentContent = `${segmentIdentifier} ${agencyIdentifier} ${accountNumber} ${mortgageIdentificationNumber}`;

// Specify the file path and name
const filePath = 'k3_report.txt';

// Write the file
fs.writeFile(filePath, segmentContent, (err) => {
  if (err) {
    console.error('Error writing the file:', err);
  } else {
    console.log(`File ${filePath} created successfully.`);
  }
});
