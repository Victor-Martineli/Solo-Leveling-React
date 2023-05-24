import Home from '../src/pages/Home/Home'
import Videos from './pages/Videos/Videos';
import Fotos from './pages/Fotos/Fotos';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/fotos' element={<Fotos />}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
