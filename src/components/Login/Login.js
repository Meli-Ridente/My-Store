import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Container, Form, FormGroup } from "react-bootstrap";
import { Button, Checkbox, Form, Input } from 'antd';
// import { Container, FormGroup, FormLabel, Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { doLoginUser } from '../../store/auth/action';
import { Navigate } from 'react-router-dom';


const Login = () => {
  const user = useSelector((state) => state.FormValidation.user)
  const [username, setUsername] = useState('kminchelle')
  const [password, setPassword] = useState('0lelplR')

  const dispatch = useDispatch()

  function tryLogin() {
    dispatch(doLoginUser({username: username, password: password}))
  }


  if(user){
    return (
      <Navigate to='/profile' replace></Navigate>
    )
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return(
    <div className='principal'>
      <h1>LoginPage</h1>
        <div className='Formulario'>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={tryLogin}
            onFinishFailed={onFinishFailed}
            // autoComplete="off"
          >
          <Form.Item
            label="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            value={password}
            onChange={(e) =>  setPassword(e.target.value)}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item >

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={tryLogin}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
)};

  Login.propTypes = {};

  Login.defaultProps = {};

  export default Login;
