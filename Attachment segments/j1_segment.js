const fs = require('fs');

const segmentIdentifier = 'J1';
const consumerTransactionType = '1';
const surname = 'Smith';
const firstName = 'Justin';
const middleName = 'Frank';
const generationCode = 'J';
const socialSecurityNumber = '123456789';
const dateOfBirth = 'MMDDYYYY';
const telephoneNumber = '1234567890';
const associationCode = '1';
const consumerInformationIndicator = '00';
const reserved = ' ';

// Generating the content of the J1 segment using template literals
 const j1Segment = `
${segmentIdentifier} ${consumerTransactionType} ${surname} ${firstName} ${middleName} ${generationCode} ${socialSecurityNumber} ${dateOfBirth} ${telephoneNumber} ${associationCode} ${consumerInformationIndicator} ${reserved}
`;

const filePath = 'j1_report.txt';


fs.writeFile(filePath, j1Segment, (err) => {
  if (err) {
    console.error('Error writing the J1 segment file:', err);
  } else {
    console.log(`J1 segment file ${filePath} created successfully.`);
  }
});
