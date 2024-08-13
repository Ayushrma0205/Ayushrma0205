import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Services from "./Components/Services";
import DisplayItems from "./Components/DisplayItems";
import AddItems from "./Components/AddItems";
import UpdateItems from "./Components/UpdateItems";
import { Route,Routes } from "react-router-dom";

function App(){
  return (
    <>
    <Menu/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/display-items" element={<DisplayItems/>}/>
      <Route path="/add-items" element={<AddItems/>}/>
      <Route path="/update-items/:id" element={<UpdateItems/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App;