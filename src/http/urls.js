const BASE_GAMES_URL = "https://api.rawg.io/";
const games_api_key = 'f4b0f229686e491bb36e4c3ecd9be1aa';

const gamesUrls = {
    search: (query, page = 1) => `${BASE_GAMES_URL}api/games?key=${games_api_key}&search=${query}&page=${page}`,
    gameDetails: (id) => `${BASE_GAMES_URL}api/games/${id}`,
    topGames: () => `${BASE_GAMES_URL}api/games?dates=2020-11-01,2021-02-01&discover=true&genres=3,4&page_size=20?key=${games_api_key}`,
    bestGamesOfTheYear: (page = 1) => `${BASE_GAMES_URL}api/games/lists/greatest?discover=true&ordering=-added&page_size=&page=${page}`,
    screenShotsGames: (id) => `${BASE_GAMES_URL}api/games/${id}/screenshots?key=${games_api_key}`,
    // https://rawg.io/api/games/lists/greatest?discover=true&ordering=-added&page_size=
    // https://rawg.io/api/games/lists/greatest?year=2020&discover=true&ordering=-added
    //https://api.rawg.io/api/games?dates=2020-10-01,2021-01-01&discover=true&page_size=20
    // https://api.rawg.io/api/games?comments=true&dates=2020-11-01,2021-01-01&discover=true&filter=true&genres=4&page_size=
    // topGames: () => `${BASE_GAMES_URL}api/games/lists/greatest?year=2020&discover=true&ordering=-added&page_size=?key=${games_api_key}`,
    // mainBase: `${BASE_GAMES_URL}api/games?key=${games_api_key}`,
}

export { gamesUrls };