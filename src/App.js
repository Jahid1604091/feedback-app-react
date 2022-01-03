import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./pages/About";
import Footer from "./components/Footer";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <>
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about/*' exact element={<About />} />
          <Route path='*' element={ <Error />}/>
           
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
