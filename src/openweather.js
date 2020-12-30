const request = require('request')

const openweath = (loc,callback) => {
    const loc2 = loc.slice(1,loc.length-1)
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+loc2+"&APPID=523bbf49a2ea24deb087d6339f1a83c8"
    request({url,json:true},(error,response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.cod === "404") {
            callback('Unable to find location. Try another search.', undefined)
        }
        else{
            callback(undefined, {
                    temp : response.body.main.temp-273,
                    weath : response.body.weather[0].main,
                    addr : loc2
                })
        }
    })
}

module.exports = openweath

