import Home from './components/Home.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Skills from './components/Skills.vue'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/projects',
        component: Portfolio
    },
    {
        path: '/skills',
        component: Skills
    },
    {
        path: '/resume',
        beforeEnter() {location.href = 'https://drive.google.com/file/d/1j3-xdBtwXnox_wSACiDbUY4uY77lJWYE/view?usp=sharing'}
   },
]