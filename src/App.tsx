import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Helmet from 'react-helmet';
import NotFound from './pages/not-found';
import About from './pages/about';
import Home from './pages';

const App = (): JSX.Element => {
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

export default App;
