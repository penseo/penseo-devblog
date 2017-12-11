import Vue from 'vue';
import Router from 'vue-router';
import BlogPost from '@/components/BlogPost';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: BlogPost,
    },
    {
      path: '/posts/:id/',
      name: 'BlogPost',
      component: BlogPost,
    },
  ],
});
