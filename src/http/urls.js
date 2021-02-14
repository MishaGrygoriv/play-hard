const BASE_GAMES_URL = "https://api.rawg.io/";
const games_api_key = '3003ff278fd34fbba23a3375836c431b';

const gamesUrls = {
    search: (query, page = 1) => `${BASE_GAMES_URL}api/games?key=${games_api_key}&search=${query}&page=${page}`,
    gameDetails: (id) => `${BASE_GAMES_URL}api/games/${id}?key=${games_api_key}`,
    topGames: () => `${BASE_GAMES_URL}api/games/lists/greatest?year=2020&discover=true&ordering=-added&page_size=?key=${games_api_key}`,
    screenShotsGames: (id) => `${BASE_GAMES_URL}api/games/${id}/screenshots?key=${games_api_key}`,
    // https://rawg.io/api/games/lists/greatest?year=2020&discover=true&ordering=-added
    // topGames: () => `${BASE_GAMES_URL}api/games?key=${games_api_key}&dates=2020-12-01,2021-02-01&ordering=-added`,
    // mainBase: `${BASE_GAMES_URL}api/games?key=${games_api_key}`,
}

export { gamesUrls };