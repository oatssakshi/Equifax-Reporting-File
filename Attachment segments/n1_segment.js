const fs = require('fs');

const segmentIdentifier = "N1";
const employerName = "Tom Jones";
const employerAddressLine1 = "123 Main St";
const employerAddressLine2 = "Suite 456";
const employerCity = "Cityville";
const employerState = "ST";
const employerPostalCode = "12345";
const occupation = "Software Engineer";
const reserved=' ';

// Generate the content of the N1 segment using template literals
const segmentContent = `${segmentIdentifier} ${employerName} ${employerAddressLine1} ${employerAddressLine2} ${employerCity} ${employerState} ${employerPostalCode} ${occupation} ${ reserved}
`;


const filePath = 'n1_report.txt';

// Write the file
fs.writeFile(filePath, segmentContent, (err) => {
  if (err) {
    console.error('Error writing the file:', err);
  } else {
    console.log(`File ${filePath} created successfully.`);
  }
});
