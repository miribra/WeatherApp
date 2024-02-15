const request = require('request')

const forecast = (city, callback) => {
    const url =`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9bfc40e3f5cd759b0455ebaacee0d9b7&units=metric`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body)
        }
    })
}

module.exports = forecast