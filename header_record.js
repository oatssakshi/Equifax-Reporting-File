const fs = require('fs');

// Sample variables
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

// Generate the content of the header record using template literals
 const headerRecord = `Record Descriptor${recordDescriptorWord}\n ${recordIdentifier} ${cycleNumber} innovisProgramIdentifier-NA ${equifaxProgramIdentifier} experianProgramIdentifier-NA transunionProgramIdentifier-NA ${activityDate} ${dateCreated} ${programDate} ${programRevisionDate} ${reporterName} ${reporterAddress} ${reporterTelephoneNumber} ${softwareVendorname} softwareVersionNumber-NA ${microBiltIdentifier} ${reserved}`;

// Specify the file path and name
const filePath = 'header_record.txt';

// Write the header record file

fs.writeFile(filePath, headerRecord, (err) => {
  if (err) {
    console.error('Error writing the header record file:', err);
  } else {
    console.log(`Header record file ${filePath} created successfully.`);
  }
});

