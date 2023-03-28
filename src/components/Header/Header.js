import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { UserAddOutlined, UserOutlined, HomeOutlined, ShopOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actionDoLogout } from '../../store/auth/action';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const user = useSelector((state) => state.FormValidation.user)
  const dispatch = useDispatch()
  const [t, i18n] = useTranslation("global")

  function logOutUser(){
    dispatch(actionDoLogout())
  }
  console.log(user)
  return(
    <Navbar bg='white' variant='white'>
      
      <Container>
        <Nav className='Header'>
          <Link to='/' className='link' ><HomeOutlined /> {t("Header.home")} </Link>
          <Link to='/products' className='link'><ShopOutlined />{t("Header.products")}</Link>
          {user ? '' : <Link to='/login' className='link' ><UserAddOutlined />{t("Header.login")}</Link> } 
          {user ? <Link to='/profile' className='link'><UserOutlined /> {t("Header.profile")}</Link>  : '' }
          
          {user ? <Link className='link' onClick={logOutUser}><UserOutlined />{t("Header.logout")}</Link> : ''}
  
        </Nav> 
      <div className='Idiomas'>
        <Button onClick={() => i18n.changeLanguage('es')} className='BotonEs'></Button>
        <Button onClick={() => i18n.changeLanguage('en')} className='BotonEn'></Button>
      </div>
      </Container>
    </Navbar>)

};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

