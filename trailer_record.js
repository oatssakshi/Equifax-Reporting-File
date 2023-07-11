// Sample variables for trailer record

const recordDescriptorWord = "0000";
const recordIdentifier = "TRAILER";
const totalBaseRecords = "1000";
const reserved1 ="";
const totalJ1Segments = "50";
const totalStatusDF = "10";
const totalJ2Segments = "20";
const blockCount = "5";
const totalStatusDA = "15";
const totalStatus05 = "5";
const totalStatus11 = "8";
const totalStatus13 = "3";
const totalStatus61 = "12";
const totalStatus62 = "6";
const totalStatus63 = "9";
const totalStatus64 = "7";
const totalStatus65 = "11";
const totalStatus71 = "4";
const totalStatus78 = "6";
const totalStatus80 = "8";
const totalStatus82 = "7";
const totalStatus83 = "5";
const totalStatus84 = "9";
const totalStatus88 = "9";
const totalStatus89 = "10";
const totalStatus93 = "7";
const totalStatus94 = "6";
const totalStatus95 = "8";
const totalStatus96 = "9";
const totalStatus97 =  "8";
const totalECOAZ = "3";
const totalEmploymentSegments = "25";
const totalOrigCredSegments = "15";
const totalPurchSoldSeg = "30";
const totalMugInfoSegs = "20";
const totalSpecPymntSegs = "10";
const totalChangeSegs = "40";
const totalSSNAll = "20";
const totalSSNBase = "35";
const totalSSNJI = "25";
const totalSSNJ2 = "15";
const totalBirthdayAll = "50";
const totalBirthdayBase = "45";
const totalBirthdayJ1 = "30";
const totalBirthdayJ2 = "20";
const totalPhoneAll = "60";
const reserved2 = "";

// Generating the content of the Trailer record using template literals
const trailerRecord = `${recordDescriptorWord}${recordIdentifier}${totalBaseRecords}${reserved1}${totalJ1Segments}${totalStatusDF}${totalJ2Segments}${blockCount}${totalStatusDA}${totalStatus05}${totalStatus11}${totalStatus13}${totalStatus61}${totalStatus62}${totalStatus63}${totalStatus64}${totalStatus65}${totalStatus71}${totalStatus78}${totalStatus80}${totalStatus82}${totalStatus83}${totalStatus84}${totalStatus88}${totalStatus89}${totalStatus93}${totalStatus94}${totalStatus95}${totalStatus96}${totalStatus97}${totalECOAZ}${totalEmploymentSegments}${totalOrigCredSegments}${totalPurchSoldSeg}${totalMugInfoSegs}${totalSpecPymntSegs}${totalChangeSegs}${totalSSNAll}${totalSSNBase}${totalSSNJI}${totalSSNJ2}${totalBirthdayAll}${totalBirthdayBase}${totalBirthdayJ1}${totalBirthdayJ2}${totalPhoneAll}${reserved2}`;


module.exports = trailerRecord;

