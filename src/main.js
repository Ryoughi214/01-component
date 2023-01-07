import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

// 全局注册组件 :在main.js中注册 ,可以在任何文件内直接使用
// 导入组件
import { MyButton } from "@/MyButton";
// 注册全局组件
Vue.component('MyButton',MyButton)
new Vue({
  render: h => h(App),
}).$mount('#app')
