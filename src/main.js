// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

const files = [];
const context = require.context('@/content/', true, /.md/);
context.keys().forEach((key) => {
  const [, date, file] = key.split('/');
  const title = file.split('.md')[0];
  const content = context(key);
  files.push([date, title, content]);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    files,
  },
});
