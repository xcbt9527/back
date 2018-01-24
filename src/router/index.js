import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.ts'
import index from "@/components/index/index.ts";
import src from '@/utils/http.ts';
import api from "@/utils/api.ts";
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
      { path: '/sysuser', component: resolve => require(['../components/sys/user/user.ts'], resolve) },
      { path: '/shoplist', component: resolve => require(['../components/shoplist/shoplist.ts'], resolve) },
      { path: '/classification', component: resolve => require(['../components/classification/classification.ts'], resolve) },
      { path: '/menulist', component: resolve => require(['../components/menu/menu.ts'], resolve) },
      { path: '/roles', component: resolve => require(['../components/sys/roles/roles.ts'], resolve) },
      { path: '/notepad', component: resolve => require(['../components/notepad/notepad.ts'], resolve) },
    ]
  }
]
const router = new Router({
  history: true,
  routes: routes,
  mode: 'history'
});
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    let key = sessionStorage.getItem('key');
    if (!key) {
      next({
        path: '/login'
      })
    } else {
      if (to.matched.length === 0) {                                        //如果未匹配到路由
        next({
          path: '/login'
        })
      } else {
        let menuchecked = true;
        if (menuchecked === false) {
          next({
            path: '/erro'
          })
        } else {
          next();
        }                                                                            //如果匹配到正确跳转
      }
    }
  } else {
    next();
  }
});
export default router;
