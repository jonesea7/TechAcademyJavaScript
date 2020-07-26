/*
    Objective:
        Create a dictionary in a function and have a value from it called in html file.

*/

function defineGame() {
    var Game = {
        Title : "Darkest Dungeon",
        Genre : "Strategy/RPG/Lovecraftian",
        personalRating : "4.5/5", //when given identical keys the browser ran the last read
    };
    document.getElementById("game-genre").innerHTML = Game.Genre;
}

function gameCharacter() {
    var Character = {
        Name : "Sal",
        gameTitle : "Griftlands",
        Personality : "Rogue",
    
    };
    delete Character.Personality;
    document.getElementById("char-type").innerHTML = Character.Personality;
}