const request = require("request");

const forecast = (latitude, longtitude, callback) => {
    const url = "http://api.weatherapi.com/v1/current.json?key=cc8c8211d87846f2b3f213620251207&q="+ latitude + "," + longtitude

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather API service.", undefined);
        } else if (response.body.error) {
            callback(response.body.error.message, undefined);
        } else {
            callback (undefined , "temp is : "  + response.body.current.temp_c )
        }
    });
};

module.exports = forecast;
