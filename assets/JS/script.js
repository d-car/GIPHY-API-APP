var teamArray = ["Denver Broncos", "Kansas City Chiefs", "Los Angeles Chargers", "Oakland Raiders", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Tennessee Titans", "Baltimore Ravens", "Cincinatti Bengals", "Cleveland Browns", "Pittsburgh Steelers", "Buffalo Bills", "Miami Dolphins", "New England Patriots", "New York Jets", "Dallas Cowboys", "New York Giants", "Philadelphia Eagles", "Washington Redskins", "Chicago Bears", "Detroit Lions", "Green Bay Packers", "Minnesota Vikings", "Atlanta Falcons", "Carolina Panthers", "New Orleans Saints", "Tampa Bay Buccaneers",];
// missing NFC West so those can be added by search field


//=================================================================================================================================

function renderButtons() {
    $("button-area").empty();

    for (var i = 0; i < teamArray.length; i++) {
        var button = $("<button>");
            button.addClass("btn btn-primary");
            button.attr("data-name", teamArray[i]);
            button.text(teamArray[i]);
        $("#button-area").append(button);
    }
}

renderButtons();

$(".btn").on("click", function() {
  $("#gif-area").empty();
    var team = $(this).attr("data-name");
    console.log(team);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=nfl+" + team + "&api_key=YtWIFNouKBztP0svyc6zF5A0mJFrGUSl&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
})
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var teamImage = $("<img>");
          teamImage.attr("src", results[i].images.fixed_height.url);
          gifDiv.html(teamImage);

          $("#gif-area").prepend(gifDiv);
        }
      });
})



