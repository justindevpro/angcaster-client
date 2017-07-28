
class AppController{
  constructor(weather, geolocation){
    this.weather = weather;
    this.location = 'Palo Alto, CA';
    this.geolocation = geolocation;
  }
  $onInit(){
    this.geolocation
               .getPosition()
               .then(coordinates => {
                 const {latitude, longitude} = coordinates;
                 return this.weather.get(latitude, longitude);
               })
               .then(weatherData => {
                 this.data = weatherData;
                 this.location = weatherData.location;
               })
               .catch(err => console.error('App', err));
  }
  onSearch({location}){
    this.location = location;
    this.weather.getByLocation(location)
              .then(weatherData => this.data = weatherData)
              .catch(err => console.error(err));
  }

}
AppController.$inject = ['weather', 'geolocation']

module.exports = AppController;
