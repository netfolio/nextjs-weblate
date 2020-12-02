import React, {useContext, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Form, Input, Button, Checkbox} from 'antd';
import AuthService from '../services/auth.services';
import {userContext} from "../context/userContext";
import {LoginOutlined} from '@ant-design/icons';

const Login = () => {
  const router = useRouter();
  const {setUser} = useContext(userContext)
  const [message, setMessage] = useState("");

  const onFinish = (values) => {
    setMessage("");
    const {email, password} = values;

    AuthService.login(email, password).then(
      (loginResponse) => {
        if (loginResponse['success'] === 0) {
          setMessage(loginResponse['message'])
        }
        if (loginResponse['success'] === 1) {
          setUser(loginResponse['user']);
          router.push('/dashboard/')
        }
        //router.push('/user/profile');
        console.log("loginResponse:", loginResponse)
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <Form
        name="basic"
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input placeholder={"Email"}/>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder={"Password"}/>
        </Form.Item>

        {/*
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        */}

        <Form.Item>
          {/*
          <Button icon={<LoginOutlined />} htmlType="submit"/>
        */}
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {message && ( <span>{message}</span> )}
    </div>
  );
};
export default Login;