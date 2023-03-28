import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { UserAddOutlined, UserOutlined, HomeOutlined, ShopOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actionDoLogout } from '../../store/auth/action';

const Header = () => {
  const user = useSelector((state) => state.FormValidation.user)
  const dispatch = useDispatch()

  function logOutUser(){
    dispatch(actionDoLogout())
  }
  return(
   <>
   
    <Navbar bg='white' variant='white'>
      
      <Container>
        <Nav className='Header'>
          <Link to='/' className='link' ><HomeOutlined /> Home </Link>
          <Link to='/products' className='link'><ShopOutlined /> Products</Link>
          {user ? '' : <Link to='/login' className='link' ><UserAddOutlined /> Login</Link> } 
          {user ? <Link to='/profile' className='link'><UserOutlined /> Profile</Link>  : '' }
          {user ? <Link className='link' onClick={logOutUser}><UserOutlined /> Logout</Link> : ''}
  
        </Nav> 
      </Container>
    </Navbar>
    </>)

};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

