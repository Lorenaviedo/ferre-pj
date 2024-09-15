// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import Home from '../pages/Home/Home.jsx'
import Navbar from '../components/Navbar/Navbar.jsx';
import AdmiAccount from '../pages/AdmiAccount/AdmiAccount.jsx';
//import Login from '../pages/Login/Login.jsx';
//import Registro from '../pages/Registro/Registro.jsx';
import Login from '../pages/NewPages/Login.jsx';
import Register from '../pages/NewPages/Register.jsx';
import UserAccount from '../pages/UserAccount/UserAccount.jsx';
import GestionEmpleado from '../pages/ADMI/GestionEmpleado/GestionEmpleado.jsx';
import GestionEnvios from '../pages/ADMI/GestionEnvios/GestionEnvios.jsx';
import GestionInventario from '../pages/ADMI/GestionInventario/GestionInventario.jsx'
import GestionPedido from '../pages/ADMI/GestionPedidos/GestionPedido.jsx';
import ContainerCard from '../components/ContainerCards/ContainerCards.jsx';
import AddCartShopping from '../pages/AddCartShopping/AddCartShopping.jsx';
import CheckOutCart from '../components/CheckOutCart/CheckOutCart.jsx';
import EmployAccount from '../pages/EmployeeAcount/EmployAccount.jsx';
import AddProductForm from '../pages/ADMI/GestionInventario/AddProductForm.jsx';
// import RegistroForm from '../pages/Registro/prueba.jsx';
import AddUserAccount from '../pages/ADMI/GestionEmpleado/FormAddAccount.jsx';
import GestionFactura from '../pages/ADMI/GestionFactura/GestionFactura.jsx';
import PersonalPageAdminInfo from '../pages/ADMI/PersonalInformation/PagePersonalInfo.jsx';
import LocationInfo from '../components/PersonalAdminInfo/LocationInfo.jsx';
import ProductCardInfo from '../components/ProductInfo/ProductCardInfo.jsx';
import ProtectedRoute from '../components/NewView/ProtectedRoute.jsx';

function Logout() {
  localStorage.clear()
  return <Navigate to="/Login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register/>
}

//<Route exact path='/admi-account' element={<AdmiAccount />} />
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CheckOutCart />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path="/admi-account" element={
          <ProtectedRoute>
            <AdmiAccount />
          </ProtectedRoute>
        }/>
        <Route exact path='/employee-account' element={<EmployAccount />} />
        <Route exact path='/gestionar-empleado' element={<GestionEmpleado />} />
        <Route exact path='/gestionar-envio' element={<GestionEnvios />} />
        <Route exact path='/gestionar-inventario' element={<GestionInventario />} />
        <Route excat path='/gestionar-pedido' element={<GestionPedido />} />
        <Route exact path='/my-account' element={<UserAccount />} />
        <Route exact path='/login' element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route exact path='/registro' element={<RegisterAndLogout />} />
        <Route exact path='/productos' element={<ContainerCard />} />
        <Route exact path='/tucarrito' element={<AddCartShopping />} />
        <Route exact path='/registrar-producto' element={<AddProductForm />} />
        <Route exact path='/producto/:id' element={<AddProductForm />} />
        <Route exact path='/registrar-cuenta' element={<AddUserAccount />} />
        <Route exact path='/gestionar-factura' element={<GestionFactura />} />
        <Route exact path='/prsn-admin-info' element={<PersonalPageAdminInfo />} />
        <Route exact path='/location-info' element={<LocationInfo />} />
        <Route exact path='/product-detail' element={<ProductCardInfo />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
