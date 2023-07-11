// Sample variables for k1 seg record

const segmentIdentifier = "K1";
const originalCreditorName = "Client-Name";
const creditorClassification = "04";

// Generating the content of the K1 segment using template literals
const k1Segment = `${segmentIdentifier}${originalCreditorName}${creditorClassification}`;

module.exports= k1Segment;


