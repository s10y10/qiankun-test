import './App.css';
import { Link, BrowserRouter } from 'react-router-dom';
import { CHILD_APP_NAME, CHILD_APP_CONFIG } from './consts';

const reactPath = CHILD_APP_CONFIG[CHILD_APP_NAME.REACT].activeRule as string;
const vuePath = CHILD_APP_CONFIG[CHILD_APP_NAME.VUE].activeRule as string;

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <h3>
          <Link to={reactPath}>去react子应用</Link>
        </h3>
        <h3>
          <Link to={vuePath}>去vue子应用</Link>
        </h3>
      </BrowserRouter>
      <div id='micro-react'></div>
      <div id='micro-vue'></div>
    </div>
  );
}

export default App;
