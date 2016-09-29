import Vue from "vue"
import Router from "vue-router"


import Index from './Index.vue'
import About from './views/About.vue'
import News from './views/News.vue'

Vue.use(Router);

var router = new Router({
    history:true
});
router.map({
	'/':{
		name:'/',
		component:Index
	},
    '/about': {
        name: 'about',
        component: About
    },
    '/news': {
        name: 'news',
        component: News
    }
})
export default router