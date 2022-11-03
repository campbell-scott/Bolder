import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer'
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '../src/context/CartContext'
import { NotificationProvider } from './notification/NotificationService'


function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={ <ItemListContainer /> } />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailsContainer />} />
              <Route path='/cart' element={<ItemCartContainer />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1 style={{margin:'3%'}}>404 NOT FOUND :/</h1>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
