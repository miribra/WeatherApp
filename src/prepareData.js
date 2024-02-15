const groupby = require('../utils/groupby');

const preparData = (data)=>
{
    const json =  groupby(data,'date')
    const dataForCsv =[]
    for (const x in json)
    {
        var d = (json[x]).sort((a,b) => {return a.temp - b.temp})
        var rain =''
        d.forEach((obj)=> { if (obj.weather == 'Rain') rain = rain +obj.city_name +',' });
        var obj = {date:x,
            City1:d[0].city_name + " " + d[0].temp,
            City2:d[1].city_name + " " + d[1].temp,
            City3:d[2].city_name + " " + d[2].temp,
            City4:d[3].city_name + " " + d[3].temp,
            City5:d[4].city_name + " " + d[4].temp,
            Rain:rain}
       dataForCsv.push(obj)     
    }

    return dataForCsv;
}

module.exports = preparData 