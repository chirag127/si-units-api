
const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../api/v1/data.json'), 'utf8'));
const meta = {
  status: 'healthy',
  lastUpdated: new Date().toISOString(),
  sourceUpdatedAt: '2019-05-20T00:00:00.000Z',
  retrievedAt: new Date().toISOString(),
  recordCount: data.length,
  version: '1.0.0',
  schemaVersion: '1.0.0',
  source: 'BIPM SI Brochure, 9th edition (2019)',
  sourceUrl: 'https://www.bipm.org/en/publications/si-brochure',
  license: 'CC-BY-4.0 (BIPM SI brochure)',
  updateCadence: 'manual',
  nextUpdateDue: new Date(Date.now() + 90*24*60*60*1000).toISOString(),
  lastFailedAt: null,
  failureReason: null
};
fs.writeFileSync(path.join(__dirname, '../api/v1/meta.json'), JSON.stringify(meta, null, 2) + '\n');
console.log('Generated meta.json');
