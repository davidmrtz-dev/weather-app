import { Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Layout from './components/layouts/Layout';
import Helmet from 'react-helmet';
import NotFound from './pages/not-found';
import About from './pages/about';
import Home from './pages';
import { theme } from './Theme';
import 'antd/dist/reset.css';
import './assets/App.css';

const MainContainer = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = (): JSX.Element => {
  return(
    <ThemeProvider theme={theme}>
      <MainContainer>
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
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
