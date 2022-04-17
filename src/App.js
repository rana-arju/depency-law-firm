import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Error404 from './Pages/Error/Error404';
import Login from './Pages/LoginAndRegister/Login';
import Register from './Pages/LoginAndRegister/Register';
import Checkout from './Pages/Checkout/Checkout';
import './App.css';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element ={<Error404 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
    </div>
  );
}

export default App;
