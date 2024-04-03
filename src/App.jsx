import MainPage from "./pages/MainPage"; 
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/works" element={<WorksPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
                
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
