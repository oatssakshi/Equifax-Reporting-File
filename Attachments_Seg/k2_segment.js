// Sample variables for k2 seg re

const segmentIdentifier = "K2";
const purchasedFromSoldToIndicator = "P";
const purchasedFromSoldToName = "ABC-Company";
const reserved = "";

// Generating the content of the K2 segment using template literals
const k2Segment = `${segmentIdentifier}${purchasedFromSoldToIndicator}${purchasedFromSoldToName}${reserved}`;


module.exports= k2Segment;
