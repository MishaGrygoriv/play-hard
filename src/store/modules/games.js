import { httpService } from '../../http';
import { message } from "ant-design-vue";

const state = () => ({
    games: [],
    topGames: [],
    bestGamesOfTheYear: [],
    count: null,
    gameDetails: {},
    screenShotsGames: {},
    page: 1,
    query: '',
    loading: false,
    error: false,
});
const mutations = {
    gamesRequest(state) {
        state.loading = true;
        state.error = false;
    },
    gamesSuccess(state) {
        state.loading = false;
        state.error = false;
    },
    gamesFailure(state) {
        state.loading = false;
        state.error = true;
    },
    gamesUpdate(state, payload) {
        state.games = [...payload.games];
        state.count = payload.count;
        state.query = payload.query;
    },
    topGamesUpdate(state, payload) {
        state.topGames = [...payload.topGames];
    },
    gameDetailsUpdate(state, payload) {
        state.gameDetails = {...payload };
    },
    bestGamesOfTheYearUpdate(state, payload) {
        state.bestGamesOfTheYear = [...payload.bestGamesOfTheYear];
        state.count = payload.count;
    },
    screenShotsGamesUpdate(state, payload) {
        state.screenShotsGames = {...payload };
    },
    changePage(state, payload) {
        state.page = payload;
    },
    setInitialPage(state) {
        state.page = 1;
    },
};
const actions = {
    getGamesByQuery: async({ commit }, { query, page = 1 }) => {
        commit('gamesRequest');
        const result = await httpService.getGamesByQuery(query, page);
        if (result) {
            commit('gamesSuccess');
            commit('gamesUpdate', { games: result.results, count: result.count, query });
        } else {
            commit('gamesFailure');
            message.error(result.error);
        }
    },
    getGameDetails: async({ commit }, payload) => {
        commit("gamesRequest");
        const result = await httpService.getGameDetails(payload);
        if (result) {
            commit('gamesSuccess');
            commit('gameDetailsUpdate', result);
        } else {
            commit('gamesFailure');
            message.error(result.details);
        }
    },
    fetchTopGames: async({ commit }) => {
        const result = await httpService.getTopGames();
        if (result) {
            commit('gamesSuccess');
            commit('topGamesUpdate', { topGames: result.results });
        } else {
            commit('gamesFailure');
            message.error(result.error);
        }
    },
    fetchScreenShotsGames: async({ commit }, payload) => {
        commit("gamesRequest");
        const result = await httpService.getScreenShotsGames(payload);
        if (result) {
            commit('gamesSuccess');
            commit('screenShotsGamesUpdate', result.results);
        } else {
            commit('gamesFailure');
            message.error(result.error);
        }
    },
    fetchBestGamesOfTheYear: async({ commit }, page = 1) => {
        const result = await httpService.getBestGamesOfTheYear(page);
        if (result) {
            commit('gamesSuccess');
            commit('bestGamesOfTheYearUpdate', { bestGamesOfTheYear: result.results, count: result.count });
        } else {
            commit('gamesFailure');
            message.error(result.error);
        }
    },
    // fetchTopGames: async({ commit }) => {
    //     // try {
    //     //     const tGames = await httpService.getTopGames();
    //     //     if (tGames) {
    //     //         commit("topGamesUpdate", { topGames: tGames.results });
    //     //     }
    //     // } catch (error) {
    //     //     console.error(error);
    //     // }
    //     commit('gamesRequest');
    //     const result = await httpService.getTopGames();
    //     if (result) {
    //         commit('gamesSuccess');
    //         commit('topGames', { topGames: result.results });
    //     } else {
    //         commit('gamesFailure');
    //         message.error(result.error);
    //     }
    // },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};