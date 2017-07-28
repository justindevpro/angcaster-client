class GeolocationService {
  constructor($window, $q){
    this.$window = $window;
    this.$q = $q;
  }

  getPosition(){
    return this.$q((resolve, reject) => {
        const {navigator} = this.$window;
        if(!navigator){
          reject('Geolocation Services are not available');
        } else {
          const success = position => {
            const {latitude, longitude} = position.coords;
            resolve({
              latitude,
              longitude
            });
          };
          const error =  err => {
            reject(err)
          };
          navigator
            .geolocation
            .getCurrentPosition(success, error);
        }
    });
  }
}

GeolocationService.$inject = ['$window', '$q'];


module.exports = GeolocationService;
