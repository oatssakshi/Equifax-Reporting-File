// Sample variables for j2 seg record

const segmentIdentifier = 'J2';
const consumerTransactionType = '0';
const surname = 'Smith';
const firstName = 'Jordan';
const middleName = 'Mike';
const generationCode = 'J';
const socialSecurityNumber = '123456789';
const dateOfBirth = '19900101';
const telephoneNumber = 'MMDDYYYY';
const associationCode = '1';
const consumerInformationIndicator = 'A';
const countryCode = 'CN';
const firstLineOfAddress = '123-Main-Street';
const secondLineOfAddress = 'Main-square';
const city = 'Cityville';
const state = 'CA';
const postalZipCode = '12345';
const addressIndicator = 'Y';
const residenceCode = 'R';
const reserved = '';

// Generating the content of the J2 segment using template literals
const j2Segment = `${segmentIdentifier}${consumerTransactionType}${surname}${firstName}${middleName}${generationCode}${socialSecurityNumber}${dateOfBirth}${telephoneNumber}${associationCode}${consumerInformationIndicator}${countryCode}${firstLineOfAddress}${secondLineOfAddress}${city}${state}${postalZipCode}${addressIndicator}${residenceCode}${reserved}`;

module.exports= j2Segment;
