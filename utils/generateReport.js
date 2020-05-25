const report = require('multiple-cucumber-html-reporter');
const path = require('path');
const reportGenerationTime = new Date().toISOString();
const pkg = require('../package.json');

report.generate({
  reportName: 'TestCafe Report',
  jsonDir: 'reports',
  reportPath: 'reports/html',
  openReportInBrowser: true,
  disableLog: true,
  displayDuration: true,
  durationInMS: true,
  customData: {
    title: 'Test run information',
    data: [
      { label: 'Project', value: `${pkg.name}` },
      { label: 'Release', value: `${pkg.version}` },
      { label: 'Report Generation Time', value: `${reportGenerationTime}` },
    ],
  },
});
