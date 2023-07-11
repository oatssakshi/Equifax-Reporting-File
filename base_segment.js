// Sample variables for base seg record

// const blockDescriptorWord = '0000';
const recordDescriptor = '0000';
const processingIndicator = '1';
const timeStamp = 'MMDDYYYHHMMSS';
const correctionIndicator = '0';
const identificationNumber = '12345678901234567890';
const cycleIdentifier ='';
const consumerAccountNumber = 'C123456789012345678901234567';
const portfolioType = 'O';
const accountType = '01';
const dateOpened = 'MMDDYYY';
const creditLimit = '23456';
const highestCreditAmount = '345667';
const termsDuration = '001';
const termsFrequency = 'M';
const scheduledPaymentAmount = '230000';
const actualPaymentAmount = '7000000';
const accountStatus = '62';
const paymentRating = 'G';
const paymentHistoryProfile = '1';
const specialComment = 'B';
const complianceConditionCode = 'XA';
const currentBalance = '8000765';
const amountPastDue = '0';
const originalChargeOffAmount = '000000000';
const dateOfAccountInformation = '20220101';
const fcraComplianceDate = '20220101';
const dateClosed = 'MMDDYYY';
const dateLastPayment = '20220101';
const currencyTypeCode = '998';
const consumerTransactionType = '0';
const surname = 'Jackson';
const firstName = 'Albert';
const middleName = 'Ronaldo';
const generationCode = 'J';
const socialSecurityNumber = '123456789';
const dateOfBirth = '19900101';
const telephoneNumber = '1234567890';
const associationCode = '1';
const consumerInformationIndicator = '00';
const countryCode = 'CN';
const firstLineOfAddress = '123-Main-St';
const secondLineOfAddress = 'Infont-of-Canadian-Bank';
const city = 'City';
const state = 'CA';
const postalCode = '12345';
const addressIndicator = 'C';
const residenceCode = '34567';
const reserved = '';

// Generating the content of the data record using template literals
 const dataRecord = `${recordDescriptor}${processingIndicator}${timeStamp}${correctionIndicator}${identificationNumber}${cycleIdentifier}${consumerAccountNumber}${portfolioType}${accountType}${dateOpened}${creditLimit}${highestCreditAmount}${termsDuration}${termsFrequency}${scheduledPaymentAmount}${actualPaymentAmount}${accountStatus}${paymentRating}${paymentHistoryProfile}${specialComment}${complianceConditionCode}${currentBalance}${amountPastDue}${originalChargeOffAmount}${dateOfAccountInformation}${fcraComplianceDate}${dateClosed}${dateLastPayment}${currencyTypeCode}${reserved}${consumerTransactionType}${surname}${firstName}${middleName}${generationCode}${socialSecurityNumber}${dateOfBirth}${telephoneNumber}${associationCode}${consumerInformationIndicator}${countryCode}${firstLineOfAddress}${secondLineOfAddress}${city}${state}${postalCode}${addressIndicator}${residenceCode}`;

module.exports= dataRecord;


