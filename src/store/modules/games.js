import { httpService } from '../../http';
import { message } from "ant-design-vue";

const state = () => ({
    games: [],
    count: null,
    gameDetails: {},
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
};
const actions = {
    getGamesByQuery: async({ commit }, { query, page = 1 }) => {
        commit('gamesRequest');
        const result = await httpService.getGamesByQuery(query, page);
        if (result) {
            commit('gamesSuccess');
            commit('gamesUpdate', { games: result.results, count: result.count });
            console.log(result);
        } else {
            commit('gamesFailure');
            message.error(result.error);
        }
    },
    getGameDetails: async({ commit }, payload) => {
        commit("gamesRequest");
        const result = await httpService.getGameDetails(payload);
        if (result)
        //.details === 'true'
        {
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