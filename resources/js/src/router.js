/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

Vue.use(Router);
const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return
    }
    next('/pages/login')
};
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'money-exchange',
                    component: () => import('./views/MoneyExchange'),
                    meta: {
                        pageTitle: 'ប្តូរប្រាក់'
                    }
                },
                /*{
                    path: '/',
                    name: 'home',
                    component: () => import('./views/Home.vue'),
                    meta:{
                        requiresAuth: true
                    }
                },
                {
                    path: '/helper',
                    name: 'Helper',
                    component: () => import('./views/helper/Helper'),
                    meta: {
                        pageTitle: 'Helper',
                        rule: 'admin',
                        requiresAuth: true
                    }
                },
                {
                    path: '/lazy-load',
                    name: 'lazy-load',
                    component: () => import('./views/lazy-load/LazyLoad'),
                    meta: {
                        pageTitle: 'Lazy Load',
                        rule: 'admin',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user-management',
                    name: 'user-management',
                    component: () => import('./views/user-management/User'),
                    meta: {
                        pageTitle: 'Users Management',
                        rule: 'admin',
                        requiresAuth: true
                    }
                },
                {
                    path: '/page2',
                    name: 'page-2',
                    component: () => import('./views/Page2.vue'),
                    meta:{
                        requiresAuth: true
                    }
                },*/
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/pages/login',
                    name: 'page-login',
                    component: () => import('./views/pages/Login.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
});

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg');
    if (appLoading) {
        appLoading.style.display = "none";
    }
});
// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isAuthenticated) {
//             next();
//             return
//         }
//         next('/pages/login')
//     } else {
//         next()
//     }
// });
export default router
