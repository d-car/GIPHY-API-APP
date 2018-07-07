var teamArray = ["Denver Broncos", "Kansas City Chiefs", "Los Angeles Chargers", "Oakland Raiders", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Tennessee Titans", "Baltimore Ravens", "Cincinatti Bengals", "Cleveland Browns", "Pittsburgh Steelers", "Buffalo Bills", "Miami Dolphins", "New England Patriots", "New York Jets", "Dallas Cowboys", "New York Giants", "Philadelphia Eagles", "Washington Redskins", "Chicago Bears", "Detroit Lions", "Green Bay Packers", "Minnesota Vikings", "Atlanta Falcons", "Carolina Panthers", "New Orleans Saints", "Tampa Bay Buccaneers",];
// missing NFC West so those can be added by search field


//=================================================================================================================================

//function empties the button div
function renderButtons() {
    $("button-area").empty();
//then loops through teamArray and creates a button for each index, adds class/attributes
    for (var i = 0; i < teamArray.length; i++) {
        var button = $("<button>");
            button.addClass("btn btn-primary");
            button.attr("data-name", teamArray[i]);
            button.text(teamArray[i]);
        $("#button-area").append(button);
    }
//click event that empties the gif div and assigns queryURL for ajax call
    $(".btn").on("click", function() {
      $("#gif-area").empty();
        var team = $(this).attr("data-name");
        console.log(team);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=nfl+" + team + "&api_key=YtWIFNouKBztP0svyc6zF5A0mJFrGUSl&limit=10";
//ajax call to giphy API  
        $.ajax({
          url: queryURL,
          method: "GET"
    })
//promise that runs the response function and grabs the data from the API    
          .then(function(response) {
            var results = response.data;
//looping through the results (response.data array, 10 indeces as specified in queryURL) and creating a div for each gif  
            for (var i = 0; i < results.length; i++) {
              var gifDIV = $("<div class='unit' data-state='still'>");
              var teamImg = $("<img id= 'teamImg'>");
//assigning attributes to both the still and animated versions of the gif for click event later              
              teamImg.attr("src", results[i].images.fixed_height.url);
              teamImg.attr({'data-animate' : results[i].images.fixed_height.url});
              teamImg.attr({"data-state" : "still"});
              teamImg.attr({'data-still' : results[i].images.fixed_height_still.url});
              gifDiv.html(teamImg);
//prepends to gif div  
              $("#gif-area").prepend(gifDiv);
            }
          });
    })    
}

// Adds new button from whatever is entered in search field
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  
  var newTeam = $("#search-input").val().trim();
  teamArray.push(newTeam);
  console.log("Searched: " + newTeam);
  $("#button-area").empty();

  renderButtons();
});

//trying to pause/play gifs on click
$(".unit").on("click", function() {

  var state = $(this).attr('data-state');
    
    if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
    } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
    }
  });

  
//render buttons on page load  
renderButtons();









