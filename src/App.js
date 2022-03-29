import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MenuRoutes from './pages/MenuRoutes';
import './App.css';
import Footer from './pages/Footer';

const App = () => {

  return (
    <div className='main'>
      <MenuRoutes />
      <Footer />
    </div>
  );
}

export default App;
