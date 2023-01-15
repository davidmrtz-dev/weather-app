import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from "./GlobalStyle";

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter basename={process.env.NODE_ENV === 'development' ? '' : '/app'}>
      <App />
    </BrowserRouter>
  </>, document.getElementById('root')
);
