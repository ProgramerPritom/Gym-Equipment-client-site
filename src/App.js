
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
