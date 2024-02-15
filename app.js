
const exportCSV = require('./utils/exportCSV.js')
const preparData = require('./src/prepareData.js');
const getFocastData = require('./src/getForcaseData.js')




getFocastData().then((result)=>{
   
    var dataForCsv = preparData(result)
    exportCSV(dataForCsv)
  
}).catch((e) =>
{
    console.log(e)
})

      
 //   })
//}






