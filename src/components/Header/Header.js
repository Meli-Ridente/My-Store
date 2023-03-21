import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { UserAddOutlined, UserOutlined, HomeOutlined, ShopOutlined} from '@ant-design/icons';

const Header = () => (
    <Navbar bg='white' variant='white'>
      <Container>
        <Nav className='Header'>
          <HomeOutlined /><Link to='/' className='link' >Home </Link>
          <UserAddOutlined /><Link to='/login' className='link'>Login</Link>
          <UserOutlined /><Link to='/profile' className='link'>Profile  </Link>
          <ShopOutlined /><Link to='/products' className='link'>Products </Link>
        </Nav> 
      </Container>
    </Navbar>

);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

