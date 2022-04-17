import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Error404 from './Pages/Error/Error404';
import Login from './Pages/LoginAndRegister/Login';
import Register from './Pages/LoginAndRegister/Register';
import Checkout from './Pages/Checkout/Checkout';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import './App.css';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element ={<Error404 />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={
            <RequireAuth>
                <Checkout />
            </RequireAuth>
          
          } />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
