import { Routes, Route } from 'react-router';
import './App.css';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import Navbar ,{ Signin , Signup} from './components/navbar';
import Homepage from './components/homepage';
import Footer from './components/footer';
import School, { ProductDetails, ProductList } from './components/school';
import College from './components/college';
import Enterprise, { HondaDisplay, HondaProducts } from './components/enterprise';
import Notes from './components/notes';
import Arienmask from './components/arien mask';
import AddTocart from './components/Addtocart';
import Notesdetails from "./components/Notesdetails"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fakeAuth } from './components/Authorization';
import Orderstatus from './components/Orderstatus';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(fakeAuth.isAuthenticated);
  const navigate = useNavigate();

  const handleSignIn = () => {
    fakeAuth.login(() => {
      setIsAuthenticated(true);
      navigate('/');
    });
  };

  const handleSignOut = () => {
    fakeAuth.logout(() => {
      setIsAuthenticated(false);
      navigate('/Signin');
    });
  };
  return (
    <div >
      <Navbar onSignOut={handleSignOut}  />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/School" element={<School />} />
        <Route exact path="/College" element={<College />} />
        <Route exact path="/Enterprise" element={<Enterprise />} />
        <Route exact path="/Notes" element={<Notes />} />
        <Route exact path="/Arien-mask" element={<Arienmask />} />
        <Route exact path="/ProductList" element={<ProductList />} />
        <Route exact path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route exact path="/HondaProducts" element={<HondaProducts />} />
        <Route exact path="/HondaDisplay/:id" element={<HondaDisplay />} />
        <Route exact path="/Addtocart" element={<AddTocart />} />
        <Route exact path="/Signin" element={<Signin />} />
        <Route exact path="/SignUp" element={<Signup />} />
        <Route exact path="/Orderstatus" element={<Orderstatus />} />
        <Route exact path="/Orderstatus" element={<Orderstatus />} />
        <Route exact path="/Notesdetails/:id"element={<Notesdetails />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>

  );
}

export default App;
