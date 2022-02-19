
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import NotFound from "./components/NotFound/NotFound"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <ToastContainer />
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="*" component={NotFound}/>
           

        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
