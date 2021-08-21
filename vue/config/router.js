const routes = [
    { path: '/', component: httpVueLoader( 'components/index.vue' ) },
    { path: '/login', component: httpVueLoader( 'components/login.vue' ) },
];
const router = new VueRouter({
    routes
});
export default router