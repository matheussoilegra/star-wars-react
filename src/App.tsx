import React from 'react';
import './styles.scss';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
