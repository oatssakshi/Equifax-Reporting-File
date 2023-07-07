const fs = require('fs');

// Sample variables
const segmentIdentifier = 'J1';
const consumerTransactionType = '1';
const surname = 'Smith';
const firstName = 'Justin';
const middleName = '';
const generationCode = 'J';
const socialSecurityNumber = '123456789';
const dateOfBirth = 'MMDDYYYY';
const telephoneNumber = '1234567890';
const associationCode = '1';
const consumerInformationIndicator = '00';
const reserved = ' ';

// Generate the content of the J1 segment using template literals
 const j1Segment = `
${segmentIdentifier} ${consumerTransactionType} ${surname} ${firstName} ${middleName} ${generationCode} ${socialSecurityNumber} ${dateOfBirth} ${telephoneNumber} ${associationCode} ${consumerInformationIndicator} ${reserved}
`;

// Specify the file path and name
const filePath = 'j1_segment.txt';

// Write the J1 segment file
fs.writeFile(filePath, j1Segment, (err) => {
  if (err) {
    console.error('Error writing the J1 segment file:', err);
  } else {
    console.log(`J1 segment file ${filePath} created successfully.`);
  }
});
