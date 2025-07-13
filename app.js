const geocode = require("./data1/geocode");
const forecast = require("./data1/forecast");

const request = require ("request")
const country = process.argv[2];

geocode(country, (error, geoData) => {
    if (error) {
        console.log("Geocoding Error:", error);
        return;
    }

    forecast(geoData.latitude, geoData.longtitude, (error, weatherData) => {
        if (error) {
            console.log("Weather API Error:", error);
        } else {
            console.log("location information:");
            console.log("country:", country);
            console.log("Latitude:", geoData.latitude);
            console.log("Longitude:", geoData.longtitude);
            console.log("Weather Temp:" , weatherData);
        }
    });
});
