import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from "qiankun"

Vue.use(ElementUI);

Vue.config.productionTip = false

const apps = [
  {
    name: "vueApp",
    entry: "//localhost:10000", // 默认加载这个html 解析里面的js 会动态的执行，该子应用必须支持跨域,fetch
    container: "#vue", // 挂载容器
    activeRule: "/vue" // 激活路径或者叫激活角色
  },
  {
    name: "reactApp",
    entry: "//localhost:20000", // 默认加载这个html 解析里面的js 会动态的执行，该子应用必须支持跨域，fetch
    container: "#react", // 挂载容器
    activeRule: "/react" // 激活路径或者叫激活角色
  }
]
registerMicroApps(apps); // 注册子应用
start(); // 启动
/**
 * 以上代码已配置好基座
 * 简单来说就是根据不同的规则，将不同的子应用挂载到对应的容器中
 * 
 */


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
