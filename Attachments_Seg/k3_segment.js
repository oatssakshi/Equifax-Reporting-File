const fs = require('fs');

const segmentIdentifier = "K3";
const agencyIdentifier = "AG";
const accountNumber = "1234567890";
const mortgageIdentificationNumber = "MORT123456";

// Generating the content of the K3 segment using template literals
const k3Segment = `${segmentIdentifier}${agencyIdentifier}${accountNumber}${mortgageIdentificationNumber}`;


// const filePath = 'k3_report.txt';


// fs.writeFile(filePath, segmentContent, (err) => {
//   if (err) {
//     console.error('Error writing the file:', err);
//   } else {
//     console.log(`File ${filePath} created successfully.`);
//   }
// });

module.exports= k3Segment;
