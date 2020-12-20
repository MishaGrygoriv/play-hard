const BASE_GAMES_URL = "https://api.rawg.io/api/games?key=";
const api_key = '3003ff278fd34fbba23a3375836c431b';

const gamesUrls = {
    mainBase: `${BASE_GAMES_URL}${api_key}`,
    // search: `${BASE_COCKTAILS_URL}/${api_key}/search.php`
}

export { gamesUrls };