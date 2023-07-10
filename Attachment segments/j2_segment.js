const fs = require('fs');

const segmentIdentifier = 'J2';
const consumerTransactionType = '0';
const surname = 'Smith';
const firstName = 'Jordan';
const middleName = 'Mike';
const generationCode = 'J';
const socialSecurityNumber = '123456789';
const dateOfBirth = '19900101';
const telephoneNumber = 'MMDDYYYY.';
const associationCode = '1';
const consumerInformationIndicator = 'A';
const countryCode = 'CN';
const firstLineOfAddress = '123 Main Street';
const secondLineOfAddress = 'Infront of canadian bank';
const city = 'Cityville';
const state = 'CA';
const postalZipCode = '12345';
const addressIndicator = 'Y';
const residenceCode = 'R';
const reserved = '  ';

// Generating the content of the J2 segment using template literals
const j2Segment = `
${segmentIdentifier} ${consumerTransactionType} ${surname} ${firstName} ${middleName} ${generationCode} ${socialSecurityNumber} ${dateOfBirth} ${telephoneNumber} ${associationCode} ${consumerInformationIndicator} ${countryCode} ${firstLineOfAddress} ${secondLineOfAddress} ${city} ${state} ${postalZipCode} ${addressIndicator} ${residenceCode} ${reserved}
`;

const filePath = 'j2_report.txt';


fs.writeFile(filePath, j2Segment, (err) => {
  if (err) {
    console.error('Error writing the J2 segment file:', err);
  } else {
    console.log(`J2 segment file ${filePath} created successfully.`);
  }
});
