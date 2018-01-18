import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.ts'
import index from "@/components/index/index.ts";
Vue.use(Router)
let routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    children: [
      {path: '/sysuser', component: resolve => require(['../components/sys/user/user.ts'], resolve)},
      {path: '/shoplist', component: resolve => require(['../components/shoplist/shoplist.ts'], resolve)},
      {path: '/classification', component: resolve => require(['../components/classification/classification.ts'], resolve)},
    ]
  }
]

const router = new Router({
  history: true,
  routes: routes
});
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    let key = sessionStorage.getItem('key');
    if (!key) {
      console.log(key);
      next({
        path: '/login'
      })
    } else {
      if (to.matched.length === 0) {                                        //如果未匹配到路由
        from.name ? next({name: from.name}) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
      } else {
        next();                                                                            //如果匹配到正确跳转
      }
    }
  } else {
    next();
  }
});
export default router;
