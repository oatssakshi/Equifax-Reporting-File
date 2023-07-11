const fs = require('fs');

const headerRecord = require('./header_record');
const trailerRecord = require('./trailer_record');
const dataRecord = require('./base_segment');

const j1Segment = require('./Attachments_Seg/j1_segment');
const j2Segment = require('./Attachments_Seg/j2_segment');
const k1Segment = require('./Attachments_Seg/k1_segment');
const k2Segment = require('./Attachments_Seg/k2_segment');
const k3Segment = require('./Attachments_Seg/k3_segment');
const k4Segment = require('./Attachments_Seg/k4_segment');
const l1Segment = require('./Attachments_Seg/l1_segment');
const n1Segment = require('./Attachments_Seg/n1_segment');

const combinedContent = `Header Record\n${headerRecord}\n\n Base Segment\n${dataRecord}\n\n Trailer Record\n${trailerRecord}\n\n J1 Segment\n${j1Segment}\n\n J2 Segment\n${j2Segment}\n\n K1 Segment\n${k1Segment}\n\n K2 Segment\n${k2Segment}\n\n K3 Segment\n${k3Segment}\n\n K4 Segment\n${k4Segment}\n\n L1 Segment\n${l1Segment}\n\n N1 Segment\nt${n1Segment}`;

const filePath = 'equifax_result.txt';


fs.writeFile(filePath, combinedContent, (err) => {
  if (err) {
    console.error('Error writing the header record file:', err);
  } else {
    console.log(`Equifax record file ${filePath} created successfully.`);
  }
});
