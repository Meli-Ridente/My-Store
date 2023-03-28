import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Container, Form, FormGroup } from "react-bootstrap";
import { Button, Checkbox, Form, Input } from 'antd';
// import { Container, FormGroup, FormLabel, Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { doLoginUser } from '../../store/auth/action';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const user = useSelector((state) => state.FormValidation.user)
  const [username, setUsername] = useState('kminchelle')
  const [password, setPassword] = useState('0lelplR')
  const [t, i18n] = useTranslation("global")

  const dispatch = useDispatch()

  function tryLogin() {
    dispatch(doLoginUser({username: username, password: password}))
  }

  if(user){
    return (
      <Navigate to='/profile' replace></Navigate>
    )
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return(
    <div className='principal'>
      <h1>{t("Login.loginpage")}</h1>
        <div className='Formulario'>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={tryLogin}
            onFinishFailed={onFinishFailed}
          >
          <Form.Item
            label={t("Login.username")}
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("Login.password")}
            name="password"
            value={password}
            onChange={(e) =>  setPassword(e.target.value)}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item >

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>{t("Login.remember")}</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={tryLogin}>
              {t("Login.submit")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
)};

  Login.propTypes = {};

  Login.defaultProps = {};

  export default Login;
