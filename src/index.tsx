import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename={process.env.NODE_ENV === 'development' ? '' : '/app'}>
    <App />
  </BrowserRouter>, document.getElementById('root')
);
