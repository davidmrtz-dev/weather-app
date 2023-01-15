import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Helmet from 'react-helmet';

const AppRoot = (): JSX.Element => {
  return(
    <Layout>
      <Helmet>
        <title>Weather App</title>
        <meta name="description" content="App that let you know the weather with map's functionality" />
      </Helmet>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

const NotFound = (): JSX.Element => {
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            WOPS! NOTHING HERE
        </a>
      </header>
    </div>
  );
};

const About = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ABOUT
        </a>
      </header>
    </div>
  );
};

const Home = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HOME
        </a>
      </header>
    </div>
  );
};

export default AppRoot;
