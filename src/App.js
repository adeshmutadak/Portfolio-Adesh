import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Routes, Route } from 'react-router-dom';

import Experience from "./component/Experience";
import Project from "./component/Project";
import ContactUs from "./component/ContactUs";
import Portfoilo from "./component/Portfoilo";

function App() {
  return (
    <>
     <Navbar/>
     
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/experience" element={<Experience/>}/>
     <Route path="/project" element={<Project/>}/>
     <Route path="/contact" element={<ContactUs/>}/>
     <Route path="/portfolio" element={<Portfoilo/>}/>
     </Routes>
    </>
  );
}

export default App;
