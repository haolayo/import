import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Field,Button } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Tab, Tabs } from 'vant';
import { ActionSheet } from 'vant';
import { Search } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Calendar } from 'vant';

Vue.use(Calendar);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(ActionSheet);
Vue.config.productionTip = false
Vue.use(Field);
Vue.use(Button);


Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sidebar);
Vue.use(SidebarItem);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
