import { gamesUrls } from "../http";

class HttpService {
    _fetchData = async(url, config = {}) => {
        try {
            const res = await fetch(url, config);
            const parsedRes = await res.json();
            return parsedRes;
        } catch (error) {
            console.error(error);
            return error
        }
    };
    // getGames = () => this._fetchData(gamesUrls.mainBase);
    getGamesByQuery = (query, page) => this._fetchData(gamesUrls.search(query, page));
    getGameDetails = (id) => this._fetchData(gamesUrls.gameDetails(id));
    getTopGames = (page) => this._fetchData(gamesUrls.topGames(page));
}

export const httpService = new HttpService();