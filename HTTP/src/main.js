import Vue from 'vue'
import App from './App.vue'
import VueResourse from 'vue-resource'

Vue.use(VueResourse);
Vue.http.options.root = 'https://vuejs-6f7c0.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  next()
});


new Vue({
  el: '#app',
  render: h => h(App)
})
