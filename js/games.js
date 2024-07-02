export class Games {
  constructor() {}
  async getGames(genre) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "2c85ba995dmsh4cc741436c8a027p1730efjsn3625e5c6667d",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`,
      options
    );
    const response = await api.json();
    console.log(response);
    return response;
  }
}