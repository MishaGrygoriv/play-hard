import { routesNames, routesPath } from "./routes";

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const News = () =>
    import ( /* webpackChunkName: "news" */ "../views/News.vue");
const Games = () =>
    import ( /* webpackChunkName: "games" */ "../views/Games.vue");
const Video = () =>
    import ( /* webpackChunkName: "video" */ "../views/Video.vue");
const Screenshots = () =>
    import ( /* webpackChunkName: "screenshots" */ "../views/Screenshots.vue");
const Support = () =>
    import ( /* webpackChunkName: "support" */ "../views/Support.vue");
const About = () =>
    import ( /* webpackChunkName: "about" */ "../views/About.vue");
const GamesInput = () =>
    import ( /* webpackChunkName: "gamesInput" */ "../views/GamesInput.vue");
const GameDetails = () =>
    import ( /* webpackChunkName: "gameDetails" */ "../views/GameDetails.vue");
const Login = () =>
    import ( /* webpackChunkName: "login" */ "../views/Login.vue");
const Register = () =>
    import ( /* webpackChunkName: "register" */ "../views/Register.vue");

Vue.use(VueRouter)

const routes = [{
        path: routesPath.home,
        name: routesNames.home,
        component: Home,
    },
    {
        path: routesPath.news,
        name: routesNames.news,
        component: News,
    },
    {
        path: routesPath.games,
        name: routesNames.games,
        component: Games,
    },
    {
        path: routesPath.video,
        name: routesNames.video,
        component: Video,
    },
    {
        path: routesPath.screenshots,
        name: routesNames.screenshots,
        component: Screenshots,
    },
    {
        path: routesPath.support,
        name: routesNames.support,
        component: Support,
    },
    {
        path: routesPath.about,
        name: routesNames.about,
        component: About,
    },
    {
        path: routesPath.gamesInput,
        name: routesNames.gamesInput,
        component: GamesInput,
    },
    {
        path: routesPath.gameDetails,
        name: routesNames.gameDetails,
        component: GameDetails,
    },
    {
        path: routesPath.login,
        name: routesNames.login,
        component: Login,
    },
    {
        path: routesPath.register,
        name: routesNames.register,
        component: Register,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router