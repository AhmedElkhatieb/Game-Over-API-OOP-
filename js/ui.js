export class Ui {
  constructor() {}

  truncateString(str) {
    if (str.length <= 50) {
      return str;
    }
    return str.slice(0, 50) + "...";
  }

  displayGames(response) {
    let box = ``;
    for (let i = 0; i < response.length; i++) {
      box += `
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card"}">
                    <img src='${
                      response[i].thumbnail
                    }' class="card-img-top" alt="game-thumb">
                    <div class="card-body">
                        <div class="game-name d-flex justify-content-between">
                            <h5 class="card-title game-name">${
                              response[i].title
                            }</h5>
                            <h5 class="game-price">Free</h5>
                        </div>
                        <p class="card-text text-center short-desc">${this.truncateString(
                          response[i].short_description
                        )}</p>
                    </div>
                    <hr>
                    <div class="game-type d-flex justify-content-between">
                        <p class="ms-3 type">${response[i].genre}</p>
                        <p class="me-3 platform">${response[i].platform}</p>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById("rowBody").innerHTML = box;

  }

  displayDetails(response) {

    let box = `
    <div class="col-md-4">
                    <img src="${response.thumbnail}" alt="thumbnail" class="w-100">
                </div>
                <div class="col-md-8">
                    <h3>Title: ${response.title}</h3>
                    <p>Category: <span class="type-2">${response.genre}</span></p>
                    <p>Platform: <span class="platform-2">${response.platform}</span></p>
                    <p>Status: <span class="status">${response.status}</span></p>
                    <p>${response.description}</p>
                    <a  href="${response.game_url}"><button class="btn show-game">Show Game</button></a>
                </div>
    `;
    document.getElementById("rowBody2").innerHTML = box;
  }
}
