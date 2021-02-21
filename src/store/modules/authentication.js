import firebase from "firebase/app";

const state = () => {
    return { user: "", error: "" };
};

const mutations = {
    setUser(state, payload) {
        state.user = payload;
    },
    setError(state, payload) {
        state.error = payload;
    },
};

const actions = {
    signUpAction({ commit }, payload) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then((response) => {
                commit("setUser", response.user);
            })
            .catch((error) => {
                commit("setError", error.message);
            });
    },
    signInAction({ commit }, payload) {
        return firebase
            .auth()
            .signInWithEmailAndPassword(payload.email, payload.password)
            .then((response) => {
                commit("setUser", response.user);
            })
            .catch((error) => {
                commit("setError", error.message);
            });
    },
    signOutAction({ commit }) {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                commit("setUser", null);
            })
            .catch((error) => {
                commit("setError", error.message);
            });
    },
    authAction({ commit }) {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                commit("setUser", user);
            } else {
                commit("setUser", null);
            }
        });
    },
};

const getters = {
    getUser(state) {
        return state.user;
    },
    isUserAuth(state) {
        return !!state.user;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};