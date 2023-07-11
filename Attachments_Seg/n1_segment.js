// Sample variables for n1 seg re

const segmentIdentifier = "N1";
const employerName = "TomJones";
const employerAddressLine1 = "123-Main-St";
const employerAddressLine2 = "Suite-456";
const employerCity = "Cityville";
const employerState = "ST";
const employerPostalCode = "12345";
const occupation = "Software Engineer";
const reserved=' ';

// Generating the content of the N1 segment using template literals
const n1Segment = `${segmentIdentifier}${employerName}${employerAddressLine1}${employerAddressLine2}${employerCity}${employerState}${employerPostalCode}${occupation}${reserved}`;

module.exports= n1Segment;