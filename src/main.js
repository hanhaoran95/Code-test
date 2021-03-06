// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

//
Vue.config.productionTip = false
//
Vue.use(VueMaterial)
Vue.use(Vuelidate)
//

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

