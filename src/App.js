import './App.css';
import Home from './pages/home.jsx'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom';
import TOS from './pages/tos';
import ContactUs from './pages/contactUs';
import ProductsPage from './pages/productsPage';

function App() {
  return (
    <div className='overflow-hidden font-Roboto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tos' element={<TOS />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='*' element={<Home />} />
      </Routes>     
      <Footer />
    </div>
  );
}

export default App;
