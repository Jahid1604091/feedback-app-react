import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import About from "./pages/About";
import Footer from "./components/Footer";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
   
      <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/about' exact component={About}/>
      <Route path='*'>
        <Error/>
      </Route>
      </Switch>
     
    </BrowserRouter>
  );
}

export default App;
