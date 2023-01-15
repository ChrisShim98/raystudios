import './App.css';
import Home from './pages/home.jsx'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom';
import TOC from './pages/toc';
import ContactUs from './pages/contactUs';

function App() {
  return (
    <div className='overflow-hidden font-Roboto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/toc' element={<TOC />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='*' element={<Home />} />
      </Routes>     
      <Footer />
    </div>
  );
}

export default App;
