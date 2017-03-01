var axios = require('axios');

//const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=metric';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d';
const API_KEY = 'd85c87cdd69f1bbef6afd238cd1ad150';

module.exports = {
   getTemp: function (location,unitsType) {

     var encodedLocation = encodeURIComponent(location);
      // var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=${unitsType}`;
    return axios.get(requestURL).then(function (res) {
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }

    }, function (res) {
      throw new Error(res.data.message);
    });

  }
};
