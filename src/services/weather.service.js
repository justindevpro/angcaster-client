const base = 'https://safe-peak-48064.herokuapp.com/weather';
const locationBase = 'https://safe-peak-48064.herokuapp.com/weather/location';

class WeatherService {
  constructor($http){
    this.$http = $http;
  }
  get(lat, lon){
    const url = `${base}/${lat},${lon}`;
    return this.$http.get(url)
                    .then(response => response.data);
  }
  getByLocation(location){
    const url = `${locationBase}/${location}`;
    return this.$http.get(url)
                     .then(response => response.data)
  }
}

WeatherService.$inject = ['$http'];

module.exports = WeatherService;
