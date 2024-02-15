
const csvWriter = require('csv-writer');
const path = require('path')


const exportCSV = function(data)
{
  const writer = csvWriter.createObjectCsvWriter({
  path: path.resolve(__dirname, 'weatherApi.csv'),
  header: [
    { id: 'date', title: 'Date' },
    { id: 'City1', title: 'City1' },
    { id: 'City2', title: 'City2' },
    { id: 'City3', title: 'City3' },
    { id: 'City4', title: 'City4' },
    { id: 'City5', title: 'City5' },
    { id: 'Rain', title: 'Rain' },
  ],
});

writer.writeRecords(data).then(() => {
  console.log('Done!');
});
}

module.exports = exportCSV