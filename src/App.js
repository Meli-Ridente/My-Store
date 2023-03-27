import './App.css';
import Header from './components/Header/Header'
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../src/pages/HomePage'
import LoginPage from '../src/pages/LoginPage'
import ProfilePage from '../src/pages/ProfilePage'
import Footer from './components/Footer/Footer'
import Products from './pages/Products';
import ProductoPage from './pages/ProductoPage'
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

function App() {

  const user = useSelector((state) => state.FormValidation.user)
  console.log(Boolean(user));

  return (
    
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/login' element={<LoginPage/>}></Route>
        <Route exact path='/profile' element={<ProfilePage/>}></Route>
        <Route exact path='/products' element={<Products/>}></Route>
        <Route exact path='/product/:id' element={<ProductoPage />}></Route>
        <Route exact path='/profile' element={user ? <ProfilePage /> : <Navigate to='/login' replace />}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;