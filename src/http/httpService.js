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
    getGamesByQuery = (query, page) => this._fetchData(gamesUrls.search(query, page));
    getGameDetails = (id) => this._fetchData(gamesUrls.gameDetails(id));
    getTopGames = () => this._fetchData(gamesUrls.topGames());
}

export const httpService = new HttpService();