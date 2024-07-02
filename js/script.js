import { Games } from "./games.js";
import { Details } from "./details.js";
import { Ui } from "./ui.js";

let home = document.getElementById("home");
let info = document.getElementById("game-info");
let exit = document.getElementById("x");
let disp = new Ui();
let gamesRequest = new Games();
let detailsRequest = new Details();
let loading = document.getElementById("loading");

// initial state (MMORPG Games):
let initialGames = await gamesRequest.getGames("mmorpg");
disp.displayGames(initialGames);
loading.classList.replace("d-flex","d-none")
const card = document.querySelectorAll(".card");
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", async function () {
    loading.classList.replace("d-none","d-flex");
    let initialDetails = await detailsRequest.getDetails(initialGames[i].id);
    disp.displayDetails(initialDetails);
    loading.classList.replace("d-flex","d-none")
    home.classList.replace("d-block", "d-none");
    info.classList.replace("d-none", "d-block");
  });
}

// X mark function
exit.addEventListener("click", function () {
  home.classList.replace("d-none", "d-block");
  info.classList.replace("d-block", "d-none");
});


// genre selection
const list = document.querySelectorAll(".nav-item");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", async function () {
    loading.classList.replace("d-none","d-flex");
    for (let i = 0; i < list.length; i++){
        list[i].classList.remove("active");
    }
    list[i].classList.add("active");
    let games = await gamesRequest.getGames(list[i].innerText);
    disp.displayGames(games);
    loading.classList.replace("d-flex","d-none");
    
    // Game Details
    const card = document.querySelectorAll(".card");
    for (let i = 0; i < card.length; i++) {
      card[i].addEventListener("click", async function () {
        loading.classList.replace("d-none","d-flex");
        let details = await detailsRequest.getDetails(games[i].id);
        disp.displayDetails(details);
        loading.classList.replace("d-flex","d-none");
        home.classList.replace("d-block", "d-none");
        info.classList.replace("d-none", "d-block");
      });
    }
  });
}