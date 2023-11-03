import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Songs',
            component: () => import('../views/Songs.vue')
        },
        {
            path: '/albums',
            name: 'Albums',
            component: () => import('../views/Albums.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        }
    ]
});

// Create a beforeEach navigation guard
router.beforeEach((to, from, next) => {
    const isAuthenticated = useAuthStore().isAuthenticated;

    if (to.path === '/login') {
        if (isAuthenticated) {
            next({ path: '/' }); // Redirect to the home route if already authenticated
        } else {
            next(); // Allow access to /login if not authenticated
        }
    } else {
        if (!isAuthenticated) {
            next({ path: '/login' }); // Allow access to other routes if authenticated
        } else {
            next(); // Redirect to the login route if not authenticated
        }
    }
});

export default router;
