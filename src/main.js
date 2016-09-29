import Vue from 'vue'
import App from './App'

import routeConfig from './router-config'

/* eslint-disable no-new */
var app = Vue.extend(App)

routeConfig.start(app, '#app')
