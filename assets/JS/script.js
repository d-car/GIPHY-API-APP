var teamArray = ["Broncos", "Chiefs", "Chargers", "Raiders", "Texans", "Colts", "Jaguars", "Titans", "Ravens", "Bengals", "Browns", "Steelers", "Bills", "Dolphins", "Patriots", "Jets", "Cowboys", "Giants", "Eagles", "Redskins", "Bears", "Lions", "Packers", "Vikings", "Falcons", "Panthers", "Saints", "Buccaneers",];

$("button").on("click", function() {
    var team = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=nfl+" + team + "&api_key=YtWIFNouKBztP0svyc6zF5A0mJFrGUSl&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data.url;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var teamImage = $("<img>");
          teamImage.attr("src", results[i].data.url);
          gifDiv.prepend(teamImage);

          $("#gif-area").prepend(gifDiv);
        }
      });
  });

    





//=================================================================================================================================

function renderButtons() {
    $("button-area").empty();

    for (var i = 0; i < teamArray.length; i++) {
        var button = $("<button>");
            button.addClass("button");
            button.attr("id", "teamButtons")
            button.attr("data-name", teamArray[i]);
            button.text(teamArray[i]);
        $("#button-area").append(button);
    }
}

renderButtons();



