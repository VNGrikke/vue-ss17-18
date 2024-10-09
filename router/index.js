import { createWebHistory, createRouter } from 'vue-router';

// b1
// const routes = [
//     {
//         path: '/',
//         redirect: '/home'  
//     },
//     {
//         path: '/home',
//         alias: ['/home-page'],
//         component: () => import('../views/Home.vue')
//     },
//     {
//         path: '/about',
//         alias: ['/get-in-touch'],
//         component: () => import('../views/About.vue')
//     },
//     {
//         path: '/contact',
//         component: () => import('../views/Contact.vue')
//     },
// ]

// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// });

// export default router;



// b2
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/bt1-2.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "search" */ '../views/bt3.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/bt5.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import(/* webpackChunkName: "admin" */ '../views/bt6.vue'),
        children: [
            {
                path: 'dashboard',
                name: 'admin-dashboard',
                component: () => import(/* webpackChunkName: "admin-dashboard" */ '../views/bt5.vue')
            },
            {
                path: 'manage-user',
                name: 'manage-user',
                component: () => import(/* webpackChunkName: "manage-user" */ '../views/Users.vue')
            },
            {
                path: 'manage-product',
                name: 'manage-product',
                component: () => import(/* webpackChunkName: "manage-product" */ '../views/Products.vue')
            },
            {
                path: 'setting',
                name: 'setting',
                component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/:notFound(.*)',
        name: 'notFound',
        component: () => import(/* webpackChunkName: "notFound" */ '../views/bt4.vue')
    },
    {
        path: "/posts",
        name: "ListPost",
        component: () => import(/* webpackChunkName: "ListPost" */ '../views/bt7.vue'),
    },
    {
        path: "/posts/:id",
        name: "PostDetail",
        component: () => import(/* webpackChunkName: "PostDetail" */ '../views/PostDetail.vue'),
    },
    {
        path: "/posts/not-found",
        name: "PostNotFound",
        component: () => import(/* webpackChunkName: "PostNotFound" */ '../views/PostNotFound.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.name === "PostDetail") {
            return { top: window.innerHeight / 2 }; // Cuộn đến giữa trang khi vào PostDetail
        } else if (savedPosition) {
            return savedPosition; // Cuộn về vị trí đã lưu trước đó khi quay lại
        } else if (to.name === "PostNotFound") {
            return { top: 0 }; // Cuộn về đầu trang khi bài viết không tồn tại
        } else {
            return { top: 0 }; // Mặc định cuộn về đầu trang với các route khác
        }
    },
});

const isLoggedIn = false;

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLoggedIn) {
            next('/login'); // Điều hướng đến login nếu chưa đăng nhập
        } else {
            next(); // Cho phép truy cập nếu đã đăng nhập
        }
    } else {
        next(); // Cho phép truy cập nếu route không yêu cầu đăng nhập
    }
});

export default router;