import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from './components/NavBar';
import Defualt from './components/Defualt';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Cart from './components/cart/cart';
import Form from './components/Form';
import Singin from './components/Singin';
import Modal from './components/Modal';
import About from './components/About';
import Footer from './components/Footer';
import UpLoad from './components/post/upload';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    < >
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/About" component={About}/>
        <Route path="/UpLoad" component={UpLoad}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/Form" component={Form}/>
        <Route path="/Singin" component={Singin}/>
        <Route  component={Defualt}/>
      </Switch>
      <Modal />
      <Footer />

      
    </>
    
  );
}

export default App;
