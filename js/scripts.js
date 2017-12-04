$(document).ready(function() {
$("#favoriteflavors").submit(function(event) {
var icecreams = ["flavorOne", "flavorTwo", "flavorThree", "flavorFour", "flavorFive"];


icecreams.forEach(function(blank) {
  var userInputFavs = $("input#" + blank).val();
  $("." + blank).text(userInputFavs);

});


  event.preventDefault();

  });
});
