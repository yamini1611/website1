import { Routes, Route } from 'react-router';
import './App.css';
import Navbar ,{Signin , Signup} from './components/navbar';
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
function App() {
  return (
    <div >
      <Navbar />
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
        <Route exact path="/Notesdetails/:id"element={<Notesdetails />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>

  );
}

export default App;
