import HomePage from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookKeeping from './pages/BookKeeping';
import CompanyReg from './pages/CompanyReg';
import Procurement from './pages/Procurement';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/book-keeping' element={<BookKeeping />} />
        <Route exact path='/company-reg' element={<CompanyReg />} />
        <Route exact path='/procurement-services' element={<Procurement />} />
        <Route exact path='/contact-us' element={<ContactUs />} />
        <Route exact path='/about-us' element={<AboutUs />} />


        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
