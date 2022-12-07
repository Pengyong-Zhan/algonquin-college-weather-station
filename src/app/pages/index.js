const WeatherCard = require('../ui/weather_card')
const applySearching = require('../ui/search')


$(document).ready(function() {
  if ($("meta[name=page]").attr("content") != "index") {
    return 
  }
  
  applySearching($("#searching"))

  $("[data-city]").each(function(_, element){
    new WeatherCard(element).render()
  })
})

