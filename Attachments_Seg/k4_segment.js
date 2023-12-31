const fs = require('fs');

const segmentIdentifier = "K4";
const specializedPaymentIndicator = "SP";
const deferredPaymentStartDate = "20220101";
const balloonPaymentDueDate = "20221231";
const balloonPaymentAmount = "5000";
const reserved=' ';

// Generating the content of the K4 segment using template literals
const k4Segment= `${segmentIdentifier}${specializedPaymentIndicator}${deferredPaymentStartDate}${balloonPaymentDueDate}${balloonPaymentAmount}${reserved}`;


// const filePath = 'k4_report.txt';


// fs.writeFile(filePath, segmentContent, (err) => {
//   if (err) {
//     console.error('Error writing the file:', err);
//   } else {
//     console.log(`File ${filePath} created successfully.`);
//   }
// });

module.exports= k4Segment;
