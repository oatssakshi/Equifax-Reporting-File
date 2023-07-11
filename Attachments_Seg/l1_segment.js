const fs = require('fs');

const segmentIdentifier = "L1";
const changeIndicator = "Y";
const newAccountNumber = "1234567890";
const newIdentificationNumber = "ABC123";

// Generating the content of the L1 segment using template literals
const l1Segment = `${segmentIdentifier}${changeIndicator}${newAccountNumber}${newIdentificationNumber}`;

// const filePath = 'l1_report.txt';


// fs.writeFile(filePath, segmentContent, (err) => {
//   if (err) {
//     console.error('Error writing the file:', err);
//   } else {
//     console.log(`File ${filePath} created successfully.`);
//   }
// });

module.exports= l1Segment;
