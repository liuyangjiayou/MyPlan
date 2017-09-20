import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Time from '@/components/Time';
import Add from '@/containers/Add';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path : '/home',
      component: Home
    },
    {
      path : '/time',
      component : Time,
      children : [
        {
          path : 'time-add',//这个位置不能加/，如果加上的话就是跟路径
          component : Add
        }
      ]
    }
  ]
})
