// Sample variables for header record

// const blockDescriptorWord = '0000';
const recordDescriptorWord = '0000';
const recordIdentifier = 'HEADER';
const cycleNumber = '01';
const equifaxProgramIdentifier = 'EQPRGID';
const activityDate = 'MMDDYYYY';
const dateCreated = 'MMDDYYYY';
const programDate ='MMDDYYYY';
const programRevisionDate ='MMDDYYYY';
const reporterName = 'Your-Company-Name';
const reporterAddress = 'Address-of-reporter';
const reporterTelephoneNumber = '123-456-7890';
const softwareVendorname ='Name of software';
const microBiltIdentifier ='Idendification-number-of-Agency';
const reserved= 'Blank-fill';

// Generating the content of the header record using template literals
 const headerRecord = `${recordDescriptorWord}${recordIdentifier}${cycleNumber}innovisProgramIdentifier-NA${equifaxProgramIdentifier}experianProgramIdentifier-NAtransunionProgramIdentifier-NA${activityDate}${dateCreated}${programDate}${programRevisionDate}${reporterName}${reporterAddress}${reporterTelephoneNumber}${softwareVendorname}softwareVersionNumber-NA${microBiltIdentifier}${reserved}`;

module.exports = headerRecord;
