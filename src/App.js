import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import './index.css';
import './App.css'
import Home from "./pages/Home/Home";
import Contact from "./pages/Contacts/Contact";

import Projects from "./pages/Projects/Projects";


const App = () => {
 return (
    <BrowserRouter>


      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />}></Route>
        
          <Route path='projects' element={<Projects />}></Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}
export default App;