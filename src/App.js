
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './Component/Auth/Login/Login';
import Register from './Component/Auth/Register/Register';
import Home from './Component/Pages/Home/Home';
import Footer from './Component/Ups-down/Footer/Footer';
import Header from './Component/Ups-down/Header/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
