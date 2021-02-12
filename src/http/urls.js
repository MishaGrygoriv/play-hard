const BASE_GAMES_URL = "https://api.rawg.io/";
const games_api_key = '3003ff278fd34fbba23a3375836c431b';

const gamesUrls = {
    search: (query, page = 1) => `${BASE_GAMES_URL}api/games?key=${games_api_key}&search=${query}&page=${page}`,
    gameDetails: (id) => `${BASE_GAMES_URL}api/games/${id}?key=${games_api_key}`,
    topGames: () => `${BASE_GAMES_URL}api/games?key=${games_api_key}&dates=2020-12-01,2021-02-01&ordering=-added`,
    // mainBase: `${BASE_GAMES_URL}api/games?key=${games_api_key}`,
}

export { gamesUrls };