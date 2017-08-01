const angular = require('angular');
const nvd3 = require('angular-nvd3');

const nvd3Style = require('nvd3/build/nv.d3.css');
const tachyons = require('tachyons/css/tachyons.css');
//components
const AppComponent = require('./components/app/');
const SearchComponent = require('./components/search');
const CurrentWeatherComponent = require('./components/current');
const HourlyWeatherComponent = require('./components/hourly');
const MinutelyWeatherComponent = require('./components/minutely');
//services
const WeatherService = require('./services/weather.service');
const GeolocationService = require('./services/geolocation.service');

angular.module('angcaster-client', [nvd3])
        .service('weather', WeatherService)
        .service('geolocation', GeolocationService)
        .component('app', AppComponent)
        .component('search', SearchComponent)
        .component('currentWeather', CurrentWeatherComponent)
        .component('minutelyWeather', MinutelyWeatherComponent)
        .component('hourlyWeather', HourlyWeatherComponent);








          //
