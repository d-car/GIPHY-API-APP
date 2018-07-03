var teams = ["Broncos", "Chiefs", "Chargers", "Raiders", "Texans", "Colts", "Jaguars", "Titans", "Ravens", "Bengals", "Browns", "Steelers", "Bills", "Dolphins", "Patriots", "Jets", "Cowboys", "Giants", "Eagles", "Redskins", "Bears", "Lions", "Packers", "Vikings", "Falcons", "Panthers", "Saints", "Buccaneers",];






//=================================================================================================================================

function renderButtons() {
    $("button-area").empty();

    for (var i = 0; i < teams.length; i++) {
        var button = $("<button>");
            button.addClass("btn btn-primary");
            button.attr("data-name", teams[i]);
            button.text(teams[i]);
        $("#button-area").append(button);
    }
}

renderButtons();


