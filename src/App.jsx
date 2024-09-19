import React from 'react';
import Header from './Component/Header/Header';
import HeroSection from './Component/Header/HeroSection';
import Section1 from './Component/Section1';
import Footer from './Component/Footer/Footer';
import Cart from './Component/Cart';
import { Provider } from 'react-redux';
import Store from '../src/Redux/Store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <div className="container-xl">
          <Header />
          <Routes>
            <Route path='/' element={<><HeroSection /><Section1 /></>} />
            <Route path='/Cart' element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
