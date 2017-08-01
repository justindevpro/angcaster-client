const prop = propName => val => val[propName];
const time = prop('time');
const probability = prop('precipProbability');

class MinutelyController {

  $onChanges(changes){
    const newMinutelyData = (changes.weatherData
                             && changes.weatherData.currentValue
                             && changes.weatherData.currentValue.data)
    if(newMinutelyData){
      const minutely = changes.weatherData.currentValue.data;
      this.data = [
        {
          values: minutely.map(point => ({x: time(point), y: probability(point) })),
          key: 'Chance of Precip'
        }
      ]

    }
  }
  $onInit(){
    this.weatherData = { data: []};
    this.options = {
      "chart": {
        "type": "lineChart",
        "height": 450,
        "margin": {
        "top": 20,
        "right": 20,
        "bottom": 40,
        "left": 55
      },
      "useInteractiveGuideline": true,
      x: function(d){ return d.x },
      y: function(d){ return d.y },
      "xAxis": {
        "axisLabel": "Date",
        tickFormat: function(d){
          return d3.time.format('%H %M %p')(new Date(d * 1000))
        }
      },
      "yAxis": {
        "axisLabel": "Precip Prob.",
        tickFormat: function(d){
          return d3.format('.00f')(d * 100)
        },
        "axisLabelDistance": -10
      },
      yDomain: [0, 1]
      },
    };
    this.data = [{
      values: this.weatherData
                  .data.map(point =>
                        ({x: point.time, y: point.precipProbability })),
      key: 'Chance of Precip'
    }]
  }
}

MinutelyController.$inject = [];

module.exports = MinutelyController;
