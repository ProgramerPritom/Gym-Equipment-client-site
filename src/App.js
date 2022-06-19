
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './Component/Auth/Login/Login';
import ProtectRoute from './Component/Auth/ProtectRoute/ProtectRoute';
import Register from './Component/Auth/Register/Register';
import AddItem from './Component/Pages/AddItem/AddItem';
import EquipCollection from './Component/Pages/EquipCollection/EquipCollection';
import Home from './Component/Pages/Home/Home';
import ManageEquip from './Component/Pages/ManageEquip/ManageEquip';
import ManageEquipDetails from './Component/Pages/ManageEquipDetails/ManageEquipDetails';
import MyItem from './Component/Pages/MyItem/MyItem';
import Footer from './Component/Ups-down/Footer/Footer';
import Header from './Component/Ups-down/Header/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/equipments' element={<EquipCollection></EquipCollection>}></Route>
        <Route path='/manage' element={<ProtectRoute><ManageEquip></ManageEquip></ProtectRoute>}></Route>
        <Route path='/manage/:id' element={<ProtectRoute><ManageEquipDetails></ManageEquipDetails></ProtectRoute>}></Route>
        <Route path='/additem' element={<ProtectRoute><AddItem></AddItem></ProtectRoute>}></Route>
        <Route path='/myItem' element={<ProtectRoute><MyItem></MyItem></ProtectRoute>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
