import './public-path';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let root: ReactDOM.Root;

function createRoot(props: Record<string, any>) {
  //container中包含了qiankun创建的dom，它会插入一个带有id为root的doom
  const { container } = props;
  const containerEl = container
    ? container.querySelector('#root')
    : document.querySelector('#root');
  root = ReactDOM.createRoot(containerEl);
}

// 独立运行，直接调用createRoot
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  createRoot({});
  // @ts-ignore
  root.render(
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  );
}

// 生命周期 =》初始化
export async function bootstrap(props: Record<string, any>) {
  console.log('bootstrap', props);
}

// 生命周期 =》 挂载
export async function mount(props: Record<string, any>) {
  createRoot(props);
  //qiankun环境中渲染
  root.render(
    <BrowserRouter
      // @ts-ignore
      basename={window._POWERED_Y_QIANKUN__ ? '/micro-react' : '/'}
    >
      <App></App>
    </BrowserRouter>
  );
}

// 生命周期 =》 卸载
export async function unmount(_props: Record<string, any>) {
  root.unmount();
}
