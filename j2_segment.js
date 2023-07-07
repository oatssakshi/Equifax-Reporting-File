const fs = require('fs');

// Sample variables
const segmentIdentifier = 'J2';
const consumerTransactionType = '0';
const surname = 'Smith';
const firstName = 'Jordan';
const middleName = '';
const generationCode = 'J';
const socialSecurityNumber = '123456789';
const dateOfBirth = '19900101';
const telephoneNumber = 'MMDDYYYY.';
const associationCode = '1';
const consumerInformationIndicator = 'A';
const countryCode = 'CN';
const firstLineOfAddress = '123 Main St';
const secondLineOfAddress = 'Infront of canadian bank';
const city = 'Cityville';
const state = 'CA';
const postalZipCode = '12345';
const addressIndicator = 'Y';
const residenceCode = 'R';
const reserved = '  ';

// Generate the content of the J2 segment using template literals
const j2Segment = `
${segmentIdentifier} ${consumerTransactionType} ${surname} ${firstName} ${middleName} ${generationCode} ${socialSecurityNumber} ${dateOfBirth} ${telephoneNumber} ${associationCode} ${consumerInformationIndicator} ${countryCode} ${firstLineOfAddress} ${secondLineOfAddress} ${city} ${state} ${postalZipCode} ${addressIndicator} ${residenceCode} ${reserved}
`;

// Specify the file path and name
const filePath = 'j2_segment.txt';

// Write the J2 segment file
fs.writeFile(filePath, j2Segment, (err) => {
  if (err) {
    console.error('Error writing the J2 segment file:', err);
  } else {
    console.log(`J2 segment file ${filePath} created successfully.`);
  }
});
