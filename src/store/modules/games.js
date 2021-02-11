import { httpService } from '../../http';
import { message } from "ant-design-vue";

const state = () => ({
    games: [],
    count: null,
    gameDetails: {},
    topGames: [],
    page: 1,
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
        state.count = payload.count
    },
    gameDetailsUpdate(state, payload) {
        state.gameDetails = {...payload };
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
            commit('gamesUpdate', { games: result.results, count: result.count });
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
    getTopGames: async({ commit }, payload) => {
        commit("gamesRequest");
        const result = await httpService.getTopGames(payload);
        if (result) {
            commit('gamesSuccess');
            commit('gameDetailsUpdate', result);
        } else {
            commit('gamesFailure');
            message.error(result.details);
        }
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};