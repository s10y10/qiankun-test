import { createApp } from 'vue';
import './style.css';
import router from './router';
import App from './App.vue';
import {
  qiankunWindow,
  renderWithQiankun,
} from 'vite-plugin-qiankun/dist/helper';

let app: any;
const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container } = props;
      render(container);
    },
    bootstrap() {
      console.log('bootstrap child-vue');
    },
    unmount() {
      app.unmount();
    },
    update() {
      console.log('update child-vue');
    },
  });
};

const render = (container?: any) => {
  app = createApp(App);
  app.use(router);
  app.mount(container ? container.querySelector('#app') : '#app');
};

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render();
