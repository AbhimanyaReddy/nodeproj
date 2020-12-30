var unirest = require("unirest");

var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");

req.query({
    "q": "melbourne,au",
});

req.headers({
    "x-rapidapi-key": "b9ad27a876msh7fd285c60a62a50p18e28ejsn7febeded0927",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "useQueryString": true
});


req.end(function (res) {
    if (res.error) console.log("CITY NOT FOUND");
    const s = res.body;
    console.log(s);
});