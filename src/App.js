import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailsContainer />} />
          <Route path='*' element={<h1 style={{margin:'3%'}}>404 NOT FOUND :/</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
