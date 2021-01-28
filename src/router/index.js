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
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    //{
    // path: '/about',
    //name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router