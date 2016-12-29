const home = r => require.ensure([], () => r(require('./views/home.vue')))

const routes = [
  { path: '/', component: home, name: 'home' },
  { path: '*', redirect: '/' }
]

export default routes
