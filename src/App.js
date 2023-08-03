import logo from './logo.svg';
import './App.scss';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import RoutePath from './routes/router';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <ProductList/> */}
      {/* <Product/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
      <RoutePath/>
    </div>
  );
}

export default App;
