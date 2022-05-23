import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MenuRoutes from './shared/components/MenuRoutes';
import './App.css';
import Footer from './shared/pages/Footer';

const App = () => {

  return (
    <div className='main'>
      <MenuRoutes />
      <Footer />
    </div>
  );
}

export default App;
