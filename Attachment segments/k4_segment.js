const fs = require('fs');

const segmentIdentifier = "K4";
const specializedPaymentIndicator = "SP";
const deferredPaymentStartDate = "20220101";
const balloonPaymentDueDate = "20221231";
const balloonPaymentAmount = "5000";
const reserved=' ';

// Generate the content of the K4 segment using template literals
const segmentContent = `${segmentIdentifier} ${specializedPaymentIndicator} ${deferredPaymentStartDate} ${balloonPaymentDueDate} ${balloonPaymentAmount} ${reserved}`;


const filePath = 'k4_report.txt';

// Write the file
fs.writeFile(filePath, segmentContent, (err) => {
  if (err) {
    console.error('Error writing the file:', err);
  } else {
    console.log(`File ${filePath} created successfully.`);
  }
});
