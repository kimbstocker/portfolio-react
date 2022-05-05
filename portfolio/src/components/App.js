import './App.css';
import { Header } from './head/Header';
import { Footer } from './footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from "./pages/Layout";
import { Home } from "../pages/Home";
import { Blogs } from '../pages/Blogs';
import { Contact } from '../pages/Contact';
import { Personal } from '../pages/Personal';
import { Portfolio } from '../pages/Portfolio';
import { Resume } from '../pages/Resume';
import { BlogOne } from '../pages/BlogOne';
import { NoPage } from '../pages/NoPage'


function App() {
  return (
    <section className='section'>
  
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogOne" element={<BlogOne />} />
            <Route path="portfolio" element={<Portfolio />} />

            <Route path="contact" element={<Contact />} />
            <Route path="personal" element={<Personal />} />
            <Route path="resume " element={<Resume />} />


            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />

      </BrowserRouter>
    
    </section>
  );
}

export default App;
