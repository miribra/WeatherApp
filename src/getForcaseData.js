const forcast = require('../service/forcastRequest')

const cities = ['Jerusalem','New York','Dubai','Lisbon','Oslo','Paris','Berlin','Athens','Seoul','Singapore']
//var cities = ['London','Dubai','Jerusalem','Lisbon','Oslo']






const getFocastData = ()=> {
    return new Promise((resolve, reject) => {
    try{
        var numOfRes =0;
        var data =[];
            for(i=0;i<cities.length;i++)
            {
        
        
                forcast(cities[i],(err,res)=>{    
                    if (err)
                    {
                        console.log(err)
                        numOfRes++;
                        //return
                    }
                    else
                    {
                        for(j=0;j<5;j++)
                        {
                            var date = new Date(res.list[j].dt * 1000)//.toDateString('dd-mm-yyyy')
                            var dateString = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
                            const f = data.find((obj) => (res.city.name == obj.city_name && dateString == obj.date))
                            if (!data.find((obj) => (res.city.name == obj.city_name && dateString == obj.date)))
                            {
                                data.push({city_name:res.city.name,date:dateString,temp:res.list[j].main.temp,weather:res.list[j].weather[0].main})
                            }
                        }
                        numOfRes++;
                    
                        
                        
                    }
                    if (numOfRes == cities.length)
                    {
                        resolve(data)
                    }
                })


        }
}
catch(e)
    { reject(e)}
})
}
module.exports = getFocastData