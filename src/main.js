import Vue from 'vue'
import App from './App.vue'
// 引入全局样式表
import './assets/style/reset.css'
// 引入 1 像素边框解决方案样式表
import "./assets/style/border.css"
// 引入fastclick解决移动端300毫秒点击延迟问题
import fastClick from 'fastclick'
// 初始化fastClick实例, 在页面的Dom元素加载完成后初始化
fastClick.attach(document.body)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
